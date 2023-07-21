import api from '../services/api'
import React, { useEffect } from 'react'
import EmployerTable from './components/Employer/EmployerTable'
import CompanyTable from './components/Company/CompanyTable'
import { Typography } from '@material-tailwind/react'
import useAuth from '../hooks/useAuth'
import { Loading } from '../components/Loading'

export default function Home() {
  const tableCompanyHeader = ['Nome', 'Site', 'Ações']
  const tableEmployerHeader = ['Nome', 'Função | Empresa', 'Entrada', 'Ações']
  const [employerList, setEmployerList] = React.useState<Employer.IEmployer[]>(
    []
  )
  const [companyList, setCompanyList] = React.useState<Company.ICompany[]>([])
  const [loading, setLoading] = React.useState(false)
  const { signed } = useAuth()
  async function fetchEmployers() {
    try {
      const { data } = await api.get('employer/')
      setEmployerList(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchCompanies() {
    try {
      const { data } = await api.get('company/')
      setCompanyList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      if (signed) {
        fetchEmployers()
        fetchCompanies()
        setLoading(false)
      }
    }, 2000)
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <div className='min-h-full my-16 max-w-screen-xl mx-auto'>
      <article className='mb-12'>
        <Typography variant='h4' className='mr-4 ml-2 py-1.5 font-bold'>
          Seja bem vind@!
        </Typography>
        <Typography className='mr-4 ml-2 py-1.5'>
          Gerenciador muito útil, com Cadastro de Empresas e Funcionários 😎
        </Typography>
      </article>
      <main>
        <div className='flex justify-between gap-20 flex-wrap'>
          <div className='flex-1 w-32'>
            <CompanyTable data={companyList} head={tableCompanyHeader} />
          </div>
          <div className='flex-1 w-64'>
            <EmployerTable data={employerList} head={tableEmployerHeader} />
          </div>
        </div>
      </main>
    </div>
  )
}
