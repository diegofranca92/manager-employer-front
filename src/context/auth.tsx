import { createContext, useEffect, useState } from 'react'
import api from '../services/api'
import { Navigate } from 'react-router-dom'

interface ContextProps {
  user: any
  signed: boolean
  signIn: (payload: User.LoginFormData) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext<ContextProps>({} as ContextProps)

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User.IUser | null | string>(null)

  useEffect(() => {
    const checkUserAuth = async () => {
      // const storageUser = localStorage.getItem('@Auth:user')
      const storageToken = localStorage.getItem('@Auth:token')
      
      if (storageToken) {
        setUser(storageToken)
      }
    }

    checkUserAuth()
  }, [])

  const signIn = async (payload: User.LoginFormData) => {
    try {
      const {data} = await api.post('token/', payload)
      // const userData = JSON.stringify(user)
      setUser(data)
      api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`
      localStorage.setItem('@Auth:token', data.access)
      // localStorage.setItem('@Auth:user', userData)
    } catch (error) {
      console.log(error);
      
    }
    
  }

  const signOut = () => {
    localStorage.clear()
    setUser(null)
    return <Navigate to='/' />
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
        signOut
      }}>
      {children}
    </AuthContext.Provider>
  )
}
