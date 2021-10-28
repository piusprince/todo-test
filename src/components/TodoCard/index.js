import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'


const index = () => {
    const id = useParams()
    const url = `https://superpoweredtodo.herokuapp.com/api/${id}`
    const [todo, setTodo] = useState(null)


    const fetchTodo = async () => {
        useEffect(() => {
            await axios.get(url)
                .then((response => {
                
                }))
        })
    }

    const postTodo = async() => {
        useEffect(() => {
            await axios.post(url,)
        })
    }

    const deleteTodo = async() => {
        useEffect(() => {
            await axios.delete(url)
        })
    }

    return (
        <TodoContainer>
            <TodoInput></TodoInput>
            <TodoSubmit></TodoSubmit>
            <TodoItems></TodoItems>
        </TodoContainer>
    )
}

export default index
