import useAuth from '../hooks/useAuth'
import { Card, Input, Button, Typography } from '@material-tailwind/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
  const { signIn, signed } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
} = useForm<User.LoginFormData>({
    defaultValues: {
        username: "",
        password: "",
    }
})

useEffect(() => {
  console.log('signed', signed);
}, [])


  const onSubmit = async (payload: User.LoginFormData) => {
    try {
      const token = await signIn(payload)
      console.log(token);
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }
  if (!signed) {
    return (
      <main className='w-full h-screen flex items-center justify-center'>
        <Card color='transparent' className='p-4'>
          <Typography variant='h4' color='blue-gray'>
            Login
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Seja bem vind@
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-4 flex flex-col gap-6'>
              <Input
                size='lg'
                type='text'
                {...register("username")}
                label='Usuário'
              />
              <Input
                type='password'
                {...register("password")}
                size='lg'
                label='Senha'
              />
            </div>
            <Button className='mt-6' type='submit' fullWidth>
              Entrar
            </Button>
          </form>
        </Card>
      </main>
    )
  } else {
    return <Navigate to='/home' />
  }
}
