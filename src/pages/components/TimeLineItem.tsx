import {
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  Avatar
} from '@material-tailwind/react'

type Props = {
  data: Employer.IEmployer
}

export function TimeLineItem({ data }: Props) {
  return (
    <TimelineItem className='h-28'>
      <TimelineConnector className='!w-[78px]' />
      <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
        <TimelineIcon className='p-3' variant='ghost'>
          <Avatar
            size='sm'
            src='https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg'
            alt='user 3'
            withBorder
          />
        </TimelineIcon>
        <div className='flex flex-col gap-1 text-left'>
          <Typography variant='h6' color='blue-gray'>
            {data.name}
          </Typography>
          
          {data.entry_date && (
            <Typography variant='small' color='gray' className='font-normal'>
              Entrou na {data.company.name} {data.entry_date}
            </Typography>
          )}

          {data.exit_date && (
            <Typography variant='small' color='gray' className='font-normal'>
              Saiu da {data.company.name} {data.exit_date}
            </Typography>
          )}

          {data.vacation_date && (
            <Typography variant='small' color='gray' className='font-normal'>
              Entrou de férias da {data.company.name} {data.vacation_date}
            </Typography>
          )}
        </div>
      </TimelineHeader>
    </TimelineItem>
  )
}
