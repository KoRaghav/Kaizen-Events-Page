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
    <div>
        <a onClick={form}>
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