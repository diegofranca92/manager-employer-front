import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
}

export default function Modal({ isOpen, onClose, onConfirm }: ModalProps) {
  return (
    <React.Fragment>
      <Dialog open={isOpen} size="xs" handler={onClose}>
        <div className='flex items-center justify-between hover:cursor-pointer'>
          <DialogHeader>Cadastro de Funcionário</DialogHeader>
          <XMarkIcon className='mr-3 h-5 w-5' onClick={onClose} />
        </div>
        <DialogBody divider>
          <div className='flex flex-col gap-6'>
            <Input color='blue' label='Nome' />
            <Input color='blue' label='Função' />
            <Input color='blue' label='Email' />
            <Input color='blue' label='Data de admissão' />
          </div>
        </DialogBody>
        <DialogFooter className='space-x-2'>
          <Button variant='outlined' color='red' onClick={onClose}>
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
