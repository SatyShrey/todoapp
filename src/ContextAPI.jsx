import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const API=createContext('')

// eslint-disable-next-line react/prop-types
export const Provider=({children})=>{
    const [err,setErr]=useState()
    const[email,setEmail]=useState('satyaxyz31@gmail.com')

    return (
        <API.Provider value={{
            err,setErr,email,setEmail
        }}>
            {children}
        </API.Provider>
    )
} 

