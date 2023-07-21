import React from 'react'
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Collapse
} from '@material-tailwind/react'
import {
  ChevronDownIcon,
  Bars3Icon,
  Bars3BottomLeftIcon,
  HomeIcon,
  PowerIcon,
} from '@heroicons/react/24/outline'
import imgPerfil from '../assets/perfil.jpg'
import useAuth from '../hooks/useAuth'

function ProfileMenu() {
  const { signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const profileMenuItems = [
    {
      label: 'Sair',
      icon: PowerIcon
    }
  ]

  const closeMenu = () => setIsMenuOpen(false)

  function handleLogout() {
    closeMenu()
    signOut()
  }

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'>
          <Avatar
            variant='circular'
            size='sm'
            alt='tania andrew'
            className='border border-blue-500 p-0.5'
            src={imgPerfil}
          />
          <h4>Diego</h4>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1
          return (
            <MenuItem
              key={label}
              onClick={handleLogout}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                  : ''
              }`}>
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2
              })}
              <Typography
                as='span'
                variant='small'
                className='font-normal'
                color={isLastItem ? 'red' : 'inherit'}>
                {label}
              </Typography>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

function NavList() {
  return (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center justify-center'>
      <Typography
        as='a'
        href='/home'
        variant='small'
        color='blue-gray'
        className='font-normal'>
        <MenuItem className='flex items-center gap-2 lg:rounded-full'>
          <HomeIcon className='h-[18px] w-[18px]' />
          Home
        </MenuItem>
      </Typography>
      <Typography
        as='a'
        href='/timeline'
        variant='small'
        color='blue-gray'
        className='font-normal'>
        <MenuItem className='flex items-center gap-2 lg:rounded-full'>
          <Bars3BottomLeftIcon className='h-[18px] w-[18px]' />
          Timeline
        </MenuItem>
      </Typography>
    </ul>
  )
}

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  const toggleIsNavOpen = () => setIsNavOpen(cur => !cur)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    )
  }, [])

  return (
    <Navbar className='mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6'>
      <div className='relative mx-auto flex items-center text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          className='mr-4 ml-2 cursor-pointer py-1.5 font-bold'>
          Employer manager
        </Typography>
        <div className='absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block'>
          <NavList />
        </div>
        <IconButton
          size='sm'
          color='blue-gray'
          variant='text'
          onClick={toggleIsNavOpen}
          className='ml-auto mr-2 lg:hidden'>
          <Bars3Icon className='h-6 w-6' />
        </IconButton>
        <ProfileMenu />
      </div>
        <Collapse open={isNavOpen} className='overflow-scroll'>
          <NavList />
        </Collapse>
    </Navbar>
  )
}
