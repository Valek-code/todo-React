import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'


export default function ToDoForm({todos,setTodos}) {

    const [todoName, setTodoName] = useState('')

    return (
        <div className='formContainer'>
            <form className='form'>
                <label>Add new ToDo : </label>
                <textarea rows={7} value={todoName} onChange={(e) => {
                    setTodoName(e.target.value)
                    
                }}></textarea>
                <button onClick={(e) => {
                    e.preventDefault()
                    const newTodo = {id:Math.floor(Math.random() * 10000), title:todoName, finished:false, date: Date.now()}
                    todos.unshift(newTodo)
                    setTodos([...todos])
                    setTodoName('')
                    
                }}><FaPlus style={{fontSize: "30px"}}/></button>
            </form>
        </div>
    )
}
