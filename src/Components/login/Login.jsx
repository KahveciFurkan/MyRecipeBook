import React, { useState,useContext } from 'react'
import styles from './login.module.css'
import { useNavigate } from "react-router-dom"
import {AuthContext} from "../../Context/AuthContext"

const Login = () => {
    const[userName,setUserName] = useState("")
    const[password,setPassword] = useState("")

    const {login} = useContext(AuthContext)
  
    const navigate = useNavigate()

    const handleSubmit = async(x) => {
        x.preventDefault();
        try {
            await login(userName,password)
            navigate('/')
        } catch (error) {
            alert("Login failed!")
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h4>LOGIN</h4>
            <div className={styles.div}>
                <p>Username</p> <br />
                <input className={styles.input} onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" />
                <p>Password</p> <br />
                <input className={styles.input} onChange={(e)=> setPassword(e.target.value)} value={password} type="text" /><br />
                <button type='submit' className={styles.btn}>Login</button>
            </div>

        </form>

    </div>
  )
}

export default Login