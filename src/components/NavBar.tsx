import React from 'react'
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar
} from '@material-tailwind/react'
import {
  ChevronDownIcon,
  // UserCircleIcon,
  // Cog6ToothIcon,
  // InboxArrowDownIcon,
  // LifebuoyIcon,
  Bars3BottomLeftIcon,
  HomeIcon,
  PowerIcon
} from '@heroicons/react/24/outline'
import imgPerfil from '../assets/perfil.jpg'
import { useNavigate } from 'react-router-dom'
// profile menu component
const profileMenuItems = [
  // {
  //   label: "My Profile",
  //   icon: UserCircleIcon,
  // },
  // {
  //   label: "Edit Profile",
  //   icon: Cog6ToothIcon,
  // },
  // {
  //   label: "Inbox",
  //   icon: InboxArrowDownIcon,
  // },
  // {
  //   label: "Help",
  //   icon: LifebuoyIcon,
  // },
  {
    label: 'Sign Out',
    icon: PowerIcon
  }
]

function ProfileMenu() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  function handleLogout() {
    closeMenu()
    navigate('/')
    console.log('Saindo...')
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

export default function NavBar() {
  return (
    <Navbar className='mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6'>
      <div className='relative mx-auto flex items-center text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          className='mr-4 ml-2 cursor-pointer py-1.5 font-medium'>
          Employer manager
        </Typography>
        <div className='absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block'>
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
        </div>
        <ProfileMenu />
      </div>
    </Navbar>
  )
}
