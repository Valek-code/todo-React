
import { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList'

function App() {

  const [todos, setTodos] = useState([])

  const dummyData = [
    {

      id: 1,
      title: 'Take out trash',
      finished: false,
      date: Date.now()

    },
    {

      id: 2,
      title: 'Feed the cat',
      finished: false,
      date: Date.now()

    },
    {

      id: 3,
      title: 'Grab some milk from the store',
      finished: false,
      date: Date.now()

    },

  ]

  useEffect(() => {

    setTodos([...dummyData])

  }, [])
  return (
    <div className="App">
      <h1 className="App__title">ToDo App</h1>
      
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
