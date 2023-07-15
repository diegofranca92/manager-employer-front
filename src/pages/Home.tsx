import imgPerfil from '../assets/perfil.jpg'
import Table from '../components/Table'
import CardDash from '../components/CardDash'

export default function Home() {
  
  
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight inline text-gray-900">Dashboard</h1>
            <img width={60} height={60} className='rounded-full' src={imgPerfil} alt=''/>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex gap-4">
            <CardDash title='Empresas' value={453} />
            <CardDash title='Funcionarios' value={453} />
            <CardDash title='Ganho' value={453} />
          </div>
          <Table title='Empresas' />
        </main>
      </div>
    </>
  )
}
