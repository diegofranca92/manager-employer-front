import Table from '../components/Table'
import CardDash from '../components/CardDash'

export default function Home() {
  return (
    <>
      <div className='min-h-full'>
        <main>
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex gap-4'>
            <CardDash title='Empresas' value={453} />
            <CardDash title='Funcionarios' value={453} />
            <CardDash title='Ganho' value={453} />
          </div>
          <Table />
        </main>
      </div>
    </>
  )
}
