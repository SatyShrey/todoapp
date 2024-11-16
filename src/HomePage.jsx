import { useContext, useEffect, useState } from "react"
import { API } from "./ContextAPI"
import axios from "axios"

function HomePage(){

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState({ txt: '', id: '',email:''})
  //let url = "https://todo-8845.onrender.com/"
       let url="http://127.0.0.1:6060/"
  const {setErr,email}=useContext(API)

  function add(e){
      e.preventDefault()
      if (newNote.txt.trim().length > 0) {
        setNotes([newNote,...notes])
        axios.post(url + "add", newNote)
        .catch(e=>{setErr(<div className="err"><div>{e.message} <button onClick={clear}>ok</button> </div></div>)})
      }
      e.target.reset()
      setNewNote({ txt: '', id: '' })
  }

  function clear(){
    setErr('')
  }
  

useEffect(()=>{
      axios.get(url +'notes/'+email).then(data => { setNotes(data.data.reverse())})
  .catch(e=>{setErr(<div className="err"><div>{e.message} <button onClick={clear}>ok</button> </div></div>)})
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  
  return (
      <div className="HomePage">
          <form className="inputBox" onSubmit={add}>
            <textarea id="inputNote" onChange={(e) => 
              setNewNote({ txt: e.target.value, id: Date.now().toString(),email:sessionStorage.getItem("email")})
              }></textarea>
            <button id="submitNote" type="submit">+</button>
          </form>
          <div className="container">
            {notes && notes.map((data, index) => 
            <div className="note" key={index}><span className="no">{index + 1}.</span> {data.txt}
              <button className="remove" onClick={() => {
                 setNotes(notes.filter(d=>d.id !== data.id))
                 axios.delete(url + "remove/" + data.id)
                 .catch(e=>{setErr(<div className="err"><div>{e.message} <button onClick={clear}>ok</button> </div></div>)})
                 }}>&#10006;
              </button>
            </div>)}
          </div>
      </div>
  )

}

export default HomePage