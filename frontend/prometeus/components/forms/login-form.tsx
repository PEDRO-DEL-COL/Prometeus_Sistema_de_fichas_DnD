"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    console.log({
      email,
      password,
    })
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
      <CardContent className="p-6">

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

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

          <Button
            type="submit"
            className="w-full"
          >
            Entrar
          </Button>

        </form>

      </CardContent>
    </Card>
  )
}