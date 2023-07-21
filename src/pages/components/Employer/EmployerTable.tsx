import {
  PencilIcon,
  TrashIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid'
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  // Avatar,
  IconButton,
  Tooltip
} from '@material-tailwind/react'
import React from 'react'
import ConfimationAlert from './Alert'
import EmployerModal from './EmployerModal'
import api from '../../../services/api'
// import { Pagination } from './Pagination'


type TableProps = {
  data: Employer.IEmployer[]
  head: string[]
}

export default function EmployerTable({ head, data }: TableProps) {
  const [open, setOpen] = React.useState(false)
  const [openDelAlert, setOpenDelAlert] = React.useState(false)
  const [employerItem, setEmployerItem] = React.useState<Employer.IEmployer>()

  const handleOpen = (data?: Employer.IEmployer) => {
    setOpen(!open)
    setEmployerItem({} as Employer.IEmployer)
    if (data) {
      setEmployerItem(data)
    } 
  }

  const handleDelete = async (data?: Employer.IEmployer) => {
    try {
      await api.delete(`employer/${data?.id}/`)
      setOpenDelAlert(false)
    } catch (error) {
      console.log(error);
    }
    
  }

  function handleOpenDelAlert(data: Employer.IEmployer) {
    setOpenDelAlert(!openDelAlert)
    if (data) {
      setEmployerItem(data)
    }
  } 

  return (
    <>
      <Card className='h-full w-full'>
        <CardHeader floated={false} shadow={false} className='rounded-none'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            {/* TODO
            <div className='w-full md:w-72'>
              <Input
                label='Search'
                icon={<MagnifyingGlassIcon className='h-5 w-5' />}
              />
            </div> */}
            <Typography
              variant='h4'
              color='blue-gray'
              className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'>
              <UserGroupIcon strokeWidth={2} className='h-10 w-10' />Funcionários
            </Typography>
            <Button
              className='flex items-center gap-3'
              onClick={() => handleOpen()}
              color='blue'
              size='sm'>
               Novo
              funcionário
            </Button>
          </div>
        </CardHeader>
        <CardBody className='md:overflow-auto overflow-scroll px-0'>
          <table className='mt-4 w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {head.map((head) => (
                  <th
                    key={head}
                    className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'>
                      {head}{' '}
                      {/* TODO
                       {index !== head.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className='h-4 w-4'
                        />
                      )} */}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((employer, index) => {
                const isLast = index === data.length - 1
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50'

                return (
                  <tr key={employer.name}>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        {/* TODO
                        <Avatar
                          src={employer.img}
                          alt={employer.name}
                          size='sm'
                        /> */}
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {employer.name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='flex flex-col'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'>
                          {employer.position}
                        </Typography>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal opacity-70'>
                          {employer.company.name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'>
                        {employer.entry_date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content='Editar Funcionário'>
                        <IconButton
                          onClick={() => handleOpen(employer)}
                          variant='text'
                          color='blue-gray'>
                          <PencilIcon className='h-4 w-4' />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content='Excluir Funcionário'>
                        <IconButton
                          onClick={() => handleOpenDelAlert(employer)}
                          variant='text'
                          color='red'>
                          <TrashIcon className='h-4 w-4' />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </CardBody>
        {/* TODO <Pagination /> */}
      </Card>
      <ConfimationAlert
        isOpen={openDelAlert}
        data={employerItem}
        onConfirm={() => handleDelete(employerItem)}
        onClose={() => setOpenDelAlert(false)}
      />
      <EmployerModal isOpen={open} data={employerItem} onClose={handleOpen} />
    </>
  )
}
