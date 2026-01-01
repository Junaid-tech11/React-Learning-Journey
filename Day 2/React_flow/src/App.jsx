
import ProfileCard from "./ProfileCard"

function App() {
    const userName = "Junaid"
    const userJob = "JavaScriptDev"

  // This "return" is what puts things on the screen!
  return (
    <>
  <ProfileCard  name= {userName}  job={userJob}/>
  <ProfileCard  name= 'Alice'  job='PythonDev'/>
    </>
  )
}

export default App
