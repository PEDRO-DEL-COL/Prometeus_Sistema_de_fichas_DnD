"use client"

import { useState } from "react"

import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"

import { Button } from "@/components/ui/button"

export function AuthCard() {
  const [isLogin, setIsLogin] = useState(true)

  function toggleForm() {
    setIsLogin(!isLogin)
  }

  return (
    <div
      className={`
        perspective-[1200px]
        w-full
        transition-all
        duration-500
        ${isLogin ? "min-h-[420px]" : "min-h-[620px]"}
      `}
    >

      <div
        className={`
          relative w-full transition-transform duration-700 transform-style-preserve-3d
          ${isLogin ? "rotate-y-0" : "rotate-y-180"}
        `}
      >

        {/* LOGIN SIDE */}
        <div className="backface-hidden w-full absolute inset-0">

          <div className="space-y-4">

            <LoginForm />

            <div className="text-center">
              <p className="text-sm text-zinc-400">
                Ainda não possui conta?
              </p>

              <Button
                variant="link"
                onClick={toggleForm}
                className="text-violet-400"
              >
                Criar conta
              </Button>
            </div>

          </div>

        </div>

        {/* REGISTER SIDE */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">

          <div className="space-y-4">

            <RegisterForm />

            <div className="text-center">
              <p className="text-sm text-zinc-400">
                Já possui uma conta?
              </p>

              <Button
                variant="link"
                onClick={toggleForm}
                className="text-violet-400"
              >
                Voltar para login
              </Button>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}