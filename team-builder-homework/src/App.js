import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import Form from './componets/Form';
import Team from './componets/Team'
import './App.css';


const intialTeamValue= [
  {
    id: uuid(),
    username: 'Amazing Student',
    email: 'awsomeintellegence@teacherspet.com',
    role: 'Student',
  },
]

const intialListValue = {
  username: '',
  email: '',
  role: '',
}

function App() {

  const [teamMember, setTeamMate] = useState(intialTeamValue)
  const[ error,setError]= useState('')
  
  
  const [teamForm, setTeamList]= useState(intialListValue)
  
  const onInputChange = evt => {
   
    const { name, value } = evt.target

    setTeamList({
     
      ...teamForm,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    
    evt.preventDefault()
    
    if (!teamForm.username || !teamForm.email || !teamForm.role) {
      setError('You need to fill out your Team Member the info')
      return
    }
    setError('')
    
    const newTeamMember = {
      id: uuid(), 
      username: teamForm.username.trim(),
      email: teamForm.email.trim(),
      role: teamForm.role,
    }
  
    setTeamMate(teamMember => [newTeamMember, ...teamMember]) 
    setTeamList
    (intialListValue)
  }
  


  return (
    <div className="App">
  <header>
    <h1>Team Builder</h1>
  </header>
  <div style={{ color: 'red' }}>{error}</div>
  <Form 
      
        values={teamForm}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {
        teamMember.map(team => {
          return (
            <Team key={team.id}  teamInfo={team} />
          )
        })
      }
    </div>
  );
}

export default App;
