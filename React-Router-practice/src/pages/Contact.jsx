import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Contact Page</h1>
        <button onClick={()=> navigate('info')}>Info</button>
        <button onClick={()=> navigate('form')}>Form</button>
    </div>
  )
}

export default Contact