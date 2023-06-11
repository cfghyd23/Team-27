import React from 'react'
import { useNavigate } from 'react-router-dom'

const Result = () => {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center mt-3' style={{
        width: "100%",
      }}>
        <div className='col-4 d-flex flex-column gap-3 pt-3'>
          <h3>Thank you, You are done with the quiz</h3>
          <h3>See you next week !</h3>
          <button className='btn btn-primary'
            onClick={() => navigate("/")}>GO TO HOME PAGE</button>
        </div>
      </div>
    </div>
  )
}

export default Result