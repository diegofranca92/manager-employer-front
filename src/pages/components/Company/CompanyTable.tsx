import { PencilIcon, TrashIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid'
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
import React, { useEffect } from 'react'
import ConfimationAlert from './Alert'
import CompanyModal from './CompanyModal'
import api from '../../../services/api'
// import { Pagination } from './Pagination'

type TableProps = {
  data: Company.ICompany[]
  head: string[]
}

export default function CompanyTable({ head, data }: TableProps) {
  const [open, setOpen] = React.useState(false)
  const [openDelAlert, setOpenDelAlert] = React.useState(false)
  const [companyItem, setCompanyItem] = React.useState<Company.ICompany>()

  const handleOpen = (data?: Company.ICompany) => {
    setOpen(!open)
    setCompanyItem({} as Company.ICompany)
    if (data) {
      setCompanyItem(data)
    }
  }

  const handleDelete = async (data?: Company.ICompany) => {
    await api.delete(`company/${data?.id}/`)
    setOpenDelAlert(false)
  }

  function handleOpenDelAlert(data: Company.ICompany) {
    setOpenDelAlert(!openDelAlert)
    if (data) {
      setCompanyItem(data)
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
              <BuildingOffice2Icon strokeWidth={2} className='h-10 w-10' /> Empresas
            </Typography>
            <Button
              className='flex items-center gap-3'
              onClick={() => handleOpen()}
              color='blue'
              size='sm'> Nova Empresa
            </Button>
          </div>
        </CardHeader>
        <CardBody className='md:overflow-auto overflow-scroll px-0'>
          <table className='mt-4 w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {head.map(head => (
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
              {data?.map((company, index) => {
                const isLast = index === data.length - 1
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50'

                return (
                  <tr key={company.name}>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        {/* TODO
                        <Avatar
                          src={company.img}
                          alt={company.name}
                          size='sm'
                        /> */}
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {company.name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='flex flex-col'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal opacity-70'>
                          {company.site}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content='Editar Empresa'>
                        <IconButton
                          onClick={() => handleOpen(company)}
                          variant='text'
                          color='blue-gray'>
                          <PencilIcon className='h-4 w-4' />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content='Excluir Empresa'>
                        <IconButton
                          onClick={() => handleOpenDelAlert(company)}
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
        data={companyItem}
        onConfirm={() => handleDelete(companyItem)}
        onClose={() => setOpenDelAlert(false)}
      />
      <CompanyModal isOpen={open} data={companyItem} onClose={handleOpen} />
    </>
  )
}
