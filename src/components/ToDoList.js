import React from 'react'
import ToDoItem from './ToDoItem'
import '../App.css'
import ToDoForm from './ToDoForm'

export default function ToDoList({todos, setTodos}) {

    return (
        <div className="todoContainer">
            <div className="todoList"> 
                {(todos === undefined) || todos.length == 0 ? <h1>No ToDo-s yet</h1> : 
                    todos.map(todoItem =>
                        <div key={todoItem.id}> 
                            <ToDoItem date={todoItem.date} todos={todos} setTodos={setTodos} todoName={todoItem.title} finished={todoItem.finished} todoId={todoItem.id}/> 
                        </div>
            )}
            <ToDoForm todos={todos} setTodos={setTodos}/> 
            </div>
        </div>
    )
}
