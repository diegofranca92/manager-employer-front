import React, { useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography
  // Textarea
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { IEmployer } from './EmployerTable'

type AlertProps = {
  isOpen: boolean
  data?: IEmployer
  onClose: () => void
  onConfirm?: () => void
}

export default function ConfimationAlert({
  isOpen,
  onClose,
  onConfirm,
  data
}: AlertProps) {
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
          <DialogHeader>Excluir funcionário</DialogHeader>
          <XMarkIcon className='mr-3 h-5 w-5' onClick={onClose} />
        </div>
        <DialogBody divider>
          <Typography variant='md' color='blue-gray'>
            Tem certeza que quer deletar {employerItem?.name}?
          </Typography>
        </DialogBody>
        <DialogFooter className='space-x-2 justify-between'>
          <Button variant='outlined' color='gray' onClick={onClose}>
            Cancelar
          </Button>
          <Button variant='gradient' color='red' onClick={onConfirm ?? onClose}>
            Sim, exluir
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  )
}
