import { Timeline } from '@material-tailwind/react'
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
    <div className='w-[25rem] mx-auto mt-8'>
      <Timeline>
        {employerList.map(employer => (
          <TimeLineItem data={employer} />
        ))}
      </Timeline>
    </div>
  )
}
