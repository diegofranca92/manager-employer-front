import React, { useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option
  // Textarea
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Controller, useForm } from 'react-hook-form'
import api from '../services/api'

type ModalProps = {
  isOpen: boolean
  data?: Employer.IEmployer
  onClose: () => void
  onConfirm?: () => void
}

export default function EmployerModal({ isOpen, onClose, data }: ModalProps) {
  const { register, reset, handleSubmit, control } =
    useForm<Employer.IEmployer>({
      defaultValues: {
        id: 0,
        name: '',
        position: '',
        entry_date: '',
        company: {
          name: ''
        }
      }
    })

  const [companyList, setCompanyList] = React.useState<Employer.IEmployer[]>([])
  async function fetchCompanies() {
    const { data } = await api.get('company/')
    setCompanyList(data)
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  const onSubmit = async (payload: Employer.IEmployer) => {
    try {
      if (payload.id) {
        await api.put('employer/', payload)
      }

      await api.post('employer/', payload)
    } catch (error) {
      console.log(error)
    }
    onClose()
  }

  useEffect(() => {
    reset(data)
  }, [data])

  return (
    <React.Fragment>
      <Dialog open={isOpen} size='xs' handler={onClose}>
        <div className='flex items-center justify-between hover:cursor-pointer'>
          <DialogHeader>Cadastro de Funcionário</DialogHeader>
          <XMarkIcon className='mr-3 h-5 w-5' onClick={onClose} />
        </div>
        <DialogBody divider>
          <div className='flex flex-col gap-6'>
            <Input color='blue' label='Nome' {...register('name')} />
            <Input color='blue' label='Função' {...register('position')} />
            <Controller
              name='company.name'
              control={control}
              render={({ field }) => (
                <Select {...field} onSelect={() => data?.company.name} label={'Selecione a empresa'}>
                  {companyList.map(company => (
                    <Option key={company.id}>{company.name}</Option>
                  ))}
                </Select>
              )}
            />

            <Input
              color='blue'
              label='Data de admissão'
              {...register('entry_date')}
            />
          </div>
        </DialogBody>
        <DialogFooter className='space-x-2 justify-between'>
          <Button variant='outlined' color='gray' onClick={onClose}>
            Fechar
          </Button>
          <Button
            variant='gradient'
            color='blue'
            onClick={handleSubmit(onSubmit)}>
            Salvar
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  )
}
