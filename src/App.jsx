import { useEffect, useState } from 'react'
import { TodoProvider } from './context';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';


function App() {
  const [todos, setTodos] = useState([])
  
  const addtodo = (todo) =>{
    console.log(todo)
    setTodos((prev)=> [...prev,{id:Date.now(),...todo}])
  }

  const deletetodo = (id) =>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const updatetodo = (id,todo) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id===id ? todo :prevtodo))
  }

  const toggletodo = (id) => {
    setTodos((prev)=> prev.map((prevtodo)=> prevtodo.id === id ? {...prevtodo,completed :!prevtodo.completed} : prevtodo))
  }
  
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length >0) {
      setTodos(todos)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
    console.log(todos)
  },[todos])

  return (
    <TodoProvider value = {{todos, addtodo,deletetodo,updatetodo,toggletodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo)=>(
                <div key={todo.id}
                  className='w-full'
                >
                  <TodoItem todo={todo}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
