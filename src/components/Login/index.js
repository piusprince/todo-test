import React, { useState } from 'react'
import axios from 'axios'
import {
    LoginContainer,
} from './LoginELements'
import { useParams } from 'react-router'

const Login = () => {
    const id = useParams()
    const loginUrl = `https://superpoweredtodo.herokuapp.com/api/${id}`

    const [login, setLogin] = useState(null)

    const enterLogin = async () => {
        await axios.post(loginUrl, )
    }

    const getLogin = async () => {
        await axios.get(loginUrl)
    }
 
    return (
        <LoginContainer>
            
        </LoginContainer>
    )
}

export default Login
