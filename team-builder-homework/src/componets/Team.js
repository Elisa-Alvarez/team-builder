import React,{useState} from 'react'


const intialListValue = {
    username: '',
    email: '',
    role: '',
  }

function Team (props){
    
    const {teamInfo, edit}= props
    
    if (!teamInfo) {
        return <h3>Working to find your Team......</h3>
      }
    
    return (
        <div className='teamMate container'>
          <h2>{teamInfo.username}</h2>
          <p>Email: {teamInfo.email}</p>
          <p>Role: {teamInfo.role}</p>
        
        </div>
      )
}

export default Team