import { Button } from "@/components/ui/button"
import { CharacterCard } from "@/components/character-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-5xl mx-auto">

        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Prometeus
            </h1>

            <p className="text-zinc-400 mt-2">
              Sistema de fichas D&D 5.5e
            </p>
          </div>

          <Button>
            Criar Personagem
          </Button>
        </header>

        <section className="grid grid-cols-3 gap-4">

          <CharacterCard
            name="Temur"
            className="Coveiro"
            level={3}
          />
          
        </section>
      </div>
    </main>
  )
}