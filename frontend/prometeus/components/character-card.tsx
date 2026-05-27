type CharacterCardProps = {
  name: string
  className: string
  level: number
}

export function CharacterCard({
  name,
  className,
  level
}: CharacterCardProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
      <h2 className="text-xl font-semibold">
        {name}
      </h2>

      <p className="text-zinc-400">
        {className} • Nível {level}
      </p>
    </div>
  )
}