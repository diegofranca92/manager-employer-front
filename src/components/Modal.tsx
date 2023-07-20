import React, { useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
  // Textarea
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'
import api from '../services/api'

type ModalProps = {
  isOpen: boolean
  data?: Employer.IEmployer
  onClose: () => void
  onConfirm?: () => void
}

export default function Modal({
  isOpen,
  onClose,
  data
}: ModalProps) {
  const {
    register,
    reset,
    handleSubmit,
  } = useForm<Employer.IEmployer>({
    defaultValues: {
      name: '',
      position: '',
      entry_date: '',
      company: {
        name: ''
      }
    }
  })

  const onSubmit = async (payload: Employer.IEmployer) => {
    try {
      if (payload.id) {
        await api.put('employer/', payload)
      }

      await api.post('employer/', payload)
    } catch (error) {
      console.log(error);
      
    }
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
            <Input color='blue' label='Empresa' {...register('company.name')} />
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
