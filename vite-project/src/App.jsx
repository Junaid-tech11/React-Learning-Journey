import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0)

  return (
    <>
      <h1>Cricket Scoreboard</h1>
      
      {/* Display the Score */}
      <h2>Score: {score}</h2>
      
      <div className="card">
        {/* Your +1 Button */}
        <button onClick={() => setScore(score + 1)}>+1 Run</button>
        
        {/* --- CHALLENGE: Add +4 and +6 Buttons below --- */}
        <button onClick={() => setScore(score + 4)}>+4 Runs</button>
        <button onClick={() => setScore(score + 6)}>+6 Runs</button>
        
      </div>
    </>
  )
}

export default App