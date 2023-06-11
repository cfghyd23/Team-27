import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='row'>
        <div className = 'col-8 rounded d-flex flex-column align-items-center' 
        style = {{border:"solid black"}}>
          <h1>The following page doesnot exist</h1>
          <button className='btn btn-primary'
          onClick={() => navigate("/")}>GO TO HOME PAGE</button>
        </div>
      </div>
    </div>
  )
}

export default NotFound