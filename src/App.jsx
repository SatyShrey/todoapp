import { useContext, useEffect } from "react"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import { API } from "./ContextAPI"
import Header from "./Header"

function App() {
  const{err,email,setEmail}=useContext(API)

  
   
  return(
    <div className="app">
        <Header/>
        {email? <HomePage/> : <LoginPage/>}
        
        <div>{err}</div>
    </div>
  )
}

export default App
