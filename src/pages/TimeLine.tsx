import { Timeline, Typography } from '@material-tailwind/react'
import api from '../services/api'
import { useEffect, useState } from 'react'
import { TimeLineItem } from './components/TimeLineItem'

export default function TimeLine() {
  const [employerList, setEmployerList] = useState<Employer.IEmployer[]>([])

  async function fetchEmployers() {
    const { data } = await api.get('employer/')
    setEmployerList(data)
  }

  useEffect(() => {
    fetchEmployers()
  }, [])

  return (
    <div className='max-w-screen-xl mx-auto mt-8'>
      <div className='flex gap-24'>
        <article className='flex-1 w-[2rem]'>
          <Typography
            variant='h4'
            className='mr-4 ml-2  py-1.5 font-bold'>
            Timeline dos Funcionários
          </Typography>
          <Typography
            className='mr-4 ml-2 py-1.5 text-justify'>
            Aqui você fica por dentro da linha do tempo do funcionário: Admissão, demissão e férias.
          </Typography>
        </article>
        <Timeline className='flex-1 w-[4rem]'>
          {employerList.map(employer => (
            <TimeLineItem data={employer} />
          ))}
        </Timeline>
      </div>
    </div>
  )
}
