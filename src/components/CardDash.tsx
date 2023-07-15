type CardProps = {
  title: string,
  value: number
}

export default function CardDash({title, value}:CardProps) {
  return (
    <div className="bg-white shadow px-8 py-4 hover:bg-slate-400 hover:scale-y-105 hover:cursor-pointer">
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="mt-2 text-sm text-gray-500">
        <span className="text-gray-900">{title}</span>
      </p>
    </div>
  )
}