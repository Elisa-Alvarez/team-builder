import React from 'react'




function Forms (props){
    const {
        values,
        onInputChange,
        onSubmit,
      } = props
    
    return (
        
        <form className='form container' onSubmit={onSubmit} style={{marginTop:'2rem', alignSelf:'center'}}>
          <div className='form-group submit'>
            <h2>Team Member Sign Up</h2>
            <button>Submit</button>
          </div>
    
          <div className='form-group inputs'>
            <h4>Team Member Info</h4>
    
            <label> First Name:&nbsp;
          
          <input
            type='text'
            name='username'
            value={values.username}
            onChange={onInputChange}
            maxLength='100'
          />
        </label>

        <label htmlFor='emailInput'>Email:&nbsp;
          
          <input
            id='emailInput'
            type='email'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>
           
            <label>Role:&nbsp;
              
              <select
                name="role"
                value={values.role}
                onChange={onInputChange}
              >
                <option value=''>-- Select a Role --</option>
                <option value='Instructor'>Instructor</option>
                <option value='Student'>Student</option>
                <option value='Team Lead'>TL</option>
              </select>
            </label>
          </div>
        </form>
      )

}

export default Forms