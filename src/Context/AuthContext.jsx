import React, { createContext, useState } from 'react'
import AuthService from '../services/AuthService'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isAuthenticated,setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("user")))

    const login = async (email,password) => {
        try {
            const response = await AuthService.login(email,password)
            console.log(response);
            if(response.access_token){
                setIsAuthenticated(JSON.parse(localStorage.getItem("user")))
                return true
            }
        } catch (error) {
            setIsAuthenticated(false)
            return false
        }
    }

    const logout = () => {
        AuthService.logout()
        setIsAuthenticated(false)
    }
  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout}}>
        {children}
    </AuthContext.Provider>
    
  )
}

