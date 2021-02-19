import React from 'react'
import '../App.css'
import { FaTrashAlt, FaPenAlt, FaCheck } from 'react-icons/fa';


export default function ToDoItem({todos, setTodos, todoName, finished, todoId, date}) {

    date = new Date(date)
    const formattedDate = date.toGMTString()

    const deleteTodo = (e) => {
        const elementToDelete = todos.indexOf(todos.find(todo => todo.id == todoId))
        todos.splice(elementToDelete, 1)
        setTodos([...todos])
        console.log(todos)
    }

    const changeFinishedState = (e) => {
        const elementToEdit = todos.indexOf(todos.find(todo => todo.id == todoId))
        if (elementToEdit !== undefined){
        todos[elementToEdit].finished = !todos[elementToEdit].finished
        setTodos([...todos])
        }
    }

    const updateToDo = (e) => {
        console.log('updating..')
    }

    return (
        <div className="todoItem">
        {finished ? <div className="todoInfoDone">
            <h2>{todoName}</h2>
        </div>
        :
        <div className="todoInfo">
            <h2>{todoName}</h2>
            
        </div>}
        
            <div className="buttonContainer">
                <button className="buttonTick" onClick={changeFinishedState}><FaCheck /></button>
                <button className="buttonUpdate" onClick={() => alert('Not finished yet :/')}><FaPenAlt /></button>
                <button className="buttonDelete" onClick={deleteTodo}><FaTrashAlt /></button>
            </div>
        </div>
    )
}
