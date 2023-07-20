
import { Navigate, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import useAuth from '../hooks/useAuth'

export const PrivateRoutes = () => {
  const { signed } = useAuth()

  return signed ? (
    <>
      <NavBar /> 
      <Outlet />
    </>
  ) : (
    <Navigate to='/' />
  )
}
