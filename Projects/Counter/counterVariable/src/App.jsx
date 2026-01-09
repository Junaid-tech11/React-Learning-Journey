import { useState } from 'react'
import './App.css'


export default function App() {
  const [count, setCount] = useState(0)

  function increment() {
    if (count < 10) {
      setCount(count + 1)
    } else {
      alert("Count cannot exceed 10")
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert("Count cannot be less than 0")
    }
  }

  function reset() {
    setCount(0)
  }

  return (
    <>
      <button onClick={decrement}>Decrement (count is {count})</button>
      <button onClick={increment}>Increment (count is {count})</button>
      <button disabled={count >= 10}>Disabled at 10 (count is {count})</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}
