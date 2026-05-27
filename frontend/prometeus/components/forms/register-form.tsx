"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { registerUser } from "@/services/api"

export function RegisterForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()

    try {

      const result = await registerUser({
        username,
        email,
        password,
      })

      console.log(result)

      alert("Conta criada com sucesso!")

      setUsername("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")

    } catch (error: any) {

      alert(error.message)

    }
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
      <CardContent className="p-6">

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div className="space-y-2">
            <Label htmlFor="username">
              Usuário
            </Label>

            <Input
              id="username"
              type="text"
              placeholder="Seu nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-zinc-950 border-zinc-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="seuemail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-950 border-zinc-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              Senha
            </Label>

            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-950 border-zinc-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirmar senha
            </Label>

            <Input
              id="confirmPassword"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-zinc-950 border-zinc-800"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            Criar Conta
          </Button>

        </form>

      </CardContent>
    </Card>
  )
}