import React, { useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

type AlertProps = {
  isOpen: boolean
  data?: Employer.IEmployer
  onClose: () => void
  onConfirm?: () => void
}

export default function ConfimationAlert({
  isOpen,
  onClose,
  onConfirm,
  data
}: AlertProps) {
  const [employerItem, setEmployerItem] = React.useState<Employer.IEmployer>()

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
            Tem certeza que quer deletar{' '}
            <span className='font-bold'>{employerItem?.name}</span>?
          </Typography>
        </DialogBody>
        <DialogFooter className='space-x-2 justify-between'>
          <Button variant='outlined' color='gray' onClick={onClose}>
            Cancelar
          </Button>
          <Button variant='gradient' color='red' onClick={onConfirm}>
            Sim, exluir
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  )
}
