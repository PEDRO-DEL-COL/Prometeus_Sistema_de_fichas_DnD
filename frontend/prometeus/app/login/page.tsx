import { AuthCard } from "@/components/forms/auth-card"
import { Logo } from "@/components/shared/logo"

export default function LoginPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-zinc-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md">

        <div className="mb-4 flex flex-col items-center">
          <Logo />

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Prometeus
          </h1>

          <p className="mt-1 text-zinc-400 text-center">
            Sistema de fichas D&D 5.5e
          </p>
        </div>

        <AuthCard />

      </div>

    </main>
  )
}