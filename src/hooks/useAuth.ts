import { useContext } from "react"

import { AuthContext } from "@app/context/auth"

const useAuth = () => useContext(AuthContext)

export default useAuth