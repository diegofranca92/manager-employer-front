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
import api from '../../../services/api'

type ModalProps = {
  isOpen: boolean
  data?: Company.ICompany
  onClose: () => void
  onConfirm?: () => void
}

export default function CompanyModal({ isOpen, onClose, data }: ModalProps) {
  const { register, reset, handleSubmit, getValues } = useForm<Company.ICompany>({
    defaultValues: {
      id: 0,
      name: '',
      site: ''
    }
  })


  const onSubmit = async (payload: Company.ICompany) => {
    try {
      if (payload.id) {
        await api.put(`company/${payload.id}/`, payload)
      } else await api.post('company/', payload)

      
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
          <DialogHeader>Cadastro de Empresa</DialogHeader>
          <XMarkIcon className='mr-3 h-5 w-5' onClick={onClose} />
        </div>
        <DialogBody divider>
          <div className='flex flex-col gap-6'>
            <Input color='blue' label='Nome' {...register('name')} />
            <Input color='blue' label='Site' {...register('site')} />
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
