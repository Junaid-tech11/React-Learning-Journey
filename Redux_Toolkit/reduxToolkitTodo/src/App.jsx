import React from 'react'
import ReactDOM from 'react-dom/client'


import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'




function App() {


  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline text-white">
            Redux Toolkit Todo App
          </h1>
        </header>
      </div>
      <main className="max-w-2xl mx-auto p-4">
        <AddTodo />
        <Todos />

      </main>
    </>
  )
}

export default App
