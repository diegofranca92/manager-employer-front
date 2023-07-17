import React, { useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  // Textarea
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { IEmployer } from './Table'

type ModalProps = {
  isOpen: boolean
  data?: IEmployer
  onClose: () => void
  onConfirm?: () => void
}

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  data
}: ModalProps) {
  const [employerItem, setEmployerItem] = React.useState<IEmployer>()

  useEffect(() => {
    console.log(data, 'ta aqui')

    if (data) {
      setEmployerItem(data)
    }
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
            <Input color='blue' label='Nome' value={employerItem?.name} />
            <Input color='blue' label='Função' value={employerItem?.job} />
            <Input color='blue' label='Email' value={employerItem?.email} />
            <Input
              color='blue'
              label='Data de admissão'
              value={employerItem?.date}
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
            onClick={onConfirm ?? onClose}>
            Salvar
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  )
}
