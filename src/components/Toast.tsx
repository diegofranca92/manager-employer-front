import React from 'react'
import { Alert, Button } from '@material-tailwind/react'
import { ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/solid'

type Props = {
  message: string
  onClose: () => void
  showToast: boolean
}

export default function Toast({ message, onClose, showToast }: Props) {

  return (
    <React.Fragment>
      <Alert
        variant='gradient'
        color='red'
        open={showToast}
        icon={<ExclamationTriangleIcon className='h-6 w-6' />}
        action={
          <Button
            variant='text'
            color='white'
            size='sm'
            className='!absolute top-3 right-3'
            onClick={onClose}>
            <XCircleIcon className='h-6 w-6' />
          </Button>
        }>
        {message}
      </Alert>
    </React.Fragment>
  )
}
