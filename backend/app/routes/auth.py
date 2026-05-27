from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.models.user import User
from app.schemas.user import UserCreate

router = APIRouter()

# DEPENDENCY
def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    # VERIFICA EMAIL
    existing_email = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Email já cadastrado"
        )

    # VERIFICA USERNAME
    existing_username = db.query(User).filter(
        User.username == user.username
    ).first()

    if existing_username:
        raise HTTPException(
            status_code=400,
            detail="Usuário já existe"
        )

    # CRIA USUÁRIO
    new_user = User(
        username=user.username,
        email=user.email,
        password=user.password
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message": "Usuário criado com sucesso",
        "user_id": new_user.id
    }