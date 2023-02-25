import React from 'react'
import './registration.css'
import { useNavigate } from 'react-router-dom'

function Registration() {
  let navigate = useNavigate(); 
  const form = () =>{ 
    let path = `/form`; 
    navigate(path);
  }

  return (
    <div style={{"zIndex":"20"}}>
        <a class="regi" onClick={form}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Registration
        </a>
    </div>
  )
}

export default Registration