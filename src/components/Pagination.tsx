import React from 'react'
import {
  Button,
  CardFooter,
  IconButton,
} from '@material-tailwind/react'
import {
  ArrowRightIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/solid'

export function Pagination() {
  const [active, setActive] = React.useState(1)

  const getItemProps = (index: number) =>
  ({
    variant: active === index ? 'filled' : 'text',
    color: active === index ? 'blue' : 'blue-gray',
    onClick: () => setActive(index),
    className: 'rounded-full'
  } as any)

const next = () => {
  if (active === 5) return

  setActive(active + 1)
}

const prev = () => {
  if (active === 1) return

  setActive(active - 1)
}

  return (
    <CardFooter className='flex items-center justify-center border-t border-blue-gray-50 p-4'>
          <div className='flex items-center gap-4'>
            <Button
              variant='text'
              color='blue-gray'
              className='flex items-center gap-2 rounded-full'
              onClick={prev}
              disabled={active === 1}>
              <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Previous
            </Button>
            <div className='flex items-center gap-2'>
              <IconButton {...getItemProps(1)}>1</IconButton>
              <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
              <IconButton {...getItemProps(4)}>4</IconButton>
              <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <Button
              variant='text'
              color='blue-gray'
              className='flex items-center gap-2 rounded-full'
              onClick={next}
              disabled={active === 5}>
              Next
              <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
            </Button>
          </div>
        </CardFooter>
  )
}