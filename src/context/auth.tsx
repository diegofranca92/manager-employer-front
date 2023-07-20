import { createContext, useEffect, useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

interface ContextProps {
  // user: User.IUser
  signed: boolean
  signIn: (payload: User.LoginFormData) => Promise<void>
  signOut: () => void
}
export const AuthContext = createContext<ContextProps>({} as ContextProps)

export const AuthProvider = ({ children }: any) => {
  // const [user, setUser] = useState<User.IUser | null>(null)
  const [storageUser, setStorageUser] = useState<string | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const navigate = useNavigate()

  const checkUserAuth = async () => {
    setAccessToken(localStorage.getItem('@Auth:token'))
    setStorageUser(localStorage.getItem('@Auth:user'))

    // if (accessToken && storageUser) {
    //   setUser(JSON.parse(storageUser) as User.IUser)
    // }
  }

  useEffect(() => {
    checkUserAuth()
  }, [storageUser, accessToken])

  const signIn = async (payload: User.LoginFormData): Promise<void> => {
    return new Promise((resolve, reject) => {
      api
        .post(`/auth/login`, payload)
        .then(res => res.data)
        .then(res => {
          localStorage.setItem('@Auth:token', res.data.token)
          localStorage.setItem('@Auth:user', res.data.user)
          api.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${res.data.token}`
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  const signOut = async () => {
    localStorage.clear()
    // setUser(null)
    navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{
        // user,
        signed: true,
        // signed: !!localStorage.getItem('@Auth:token'),
        signIn,
        signOut
      }}>
      {children}
    </AuthContext.Provider>
  )
}
