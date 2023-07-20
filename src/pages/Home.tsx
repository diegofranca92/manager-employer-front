import Table from '../components/Table'
import CardDash from '../components/CardDash'
import api from '../services/api'
import React, { useEffect } from 'react'
export default function Home() {

  const tableHeader = ['Funcionário', 'Função', 'Entrada', 'Ações']
  const [employerList, setEmployerList] = React.useState<Employer.IEmployer[]>([])
  const [companyList, setCompanyList] = React.useState<Employer.IEmployer[]>([])

  async function fetchEmployers() {
    const { data } = await api.get('employer/')
    setEmployerList(data)
  }
  
  async function fetchCompanies() {
    const { data } = await api.get('company/')
    setCompanyList(data)
  }

  useEffect(() => {
    fetchEmployers()
    fetchCompanies()
  }, [])

  return (
    <>
      <div className='min-h-full'>
        <main>
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex gap-4'>
            <CardDash title='Empresas' value={companyList.length} />
            <CardDash title='Funcionarios' value={employerList?.length} />
          </div>
          <div className='mx-auto max-w-screen-xl'>
          <Table data={employerList} head={tableHeader} />
          </div>
        </main>
      </div>
    </>
  )
}
