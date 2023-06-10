import React from 'react'
import {Profiles} from './questionData'; 

const Profile = () => {
  return (
    <div className='container'>
        <div className='row mt-5 pt-3'>
            <div className='col-8 mx-auto d-flex flex-column direction-column gap-3 align-items-center rounded' style = {{flexWrap:"wrap",border:"solid black"}}
            >
                <h3 className='b'>Name : <span className='h3'>{Profiles.UserName}</span></h3>
                <h3>Age : <span className='h3'>{Profiles.Age}</span></h3>
                <h3>City : <span className='h3'>{Profiles.City}</span></h3>
                <h3>State : <span className='h3'>{Profiles.State}</span></h3>
                <h3>Admission no : <span className='h3'>{Profiles.Admission_number}</span></h3>
                <h3>Name of the guardian : {Profiles.Name_of_the_guardian}</h3>
            </div>              
        </div>
    </div>
  )
}

export default Profile