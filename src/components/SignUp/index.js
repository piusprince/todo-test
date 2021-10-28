import React, { useState } from 'react'
import axios from 'axios'
import {
    SignUpContainer
} from './SignUpElements'
import { useParams } from 'react-router'



const SignUp = () => {
    const id = useParams()
    const signupUrl = `https://superpoweredtodo.herokuapp.com/api/${id}`

    const [signUp, setSignUp] = useState(null)

    const getSignUp = async() => {
        await axios.get(signupUrl)
            .then((response => {

            }))

            .catch((error => {
                console.log()
            }))
    }

    return (
        <SignUpContainer>

        </SignUpContainer>
    )
}

export default SignUp
