import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { Navigate, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

export const PrivateRoutes = () => {
  const { signed } = useContext(AuthContext)

  return signed ? (
    <>
      <NavBar /> 
      <Outlet />
    </>
  ) : (
    <Navigate to='/' />
  )
}
