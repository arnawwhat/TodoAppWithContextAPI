import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]); 
    // adding another tood and spreading the previous ones.
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    ); // check if the id is matching the todoid or not.
  };
  const deleteTodo = (id) => {
    if (id == null) return;
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )
    );
  };
// sari values aa gayi to usko todos me set krna hai localstorage se when app renders.
  useEffect(()=>{
    const todos= JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])
  

  //To insert into local storage whenever the todos array changes.
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm/></div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=> (
              <div className="w-full" key= {todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
