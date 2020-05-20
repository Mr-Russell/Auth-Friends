import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth.js'
import { useHistory } from 'react-router-dom'
import Loader from 'react-loader-spinner'

const blankCredentials = {
  username: '',
  password: ''
}

const Login = (props) => {
  const [credentials, setCredentials] = useState(blankCredentials)
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const userLogin = e => {
    e.preventDefault()
    
    setIsLoading(true)

    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        console.log(res)
        window.localStorage.setItem('token', res.data.payload)
        setIsLoading(false)
        history.push('/friends-list')
      })
      .catch(err => console.log(err))
  } 

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return(
    <div>
      <h1>Login</h1>

      
      <form onSubmit={userLogin}>
        <label>Username:
          <input
            name='username'
            type='text'
            value={credentials.username}
            onChange={handleChange}
          />
        </label>

        <br />
       
        <label>Password:
          <input
            name='password'
            type='password'
            value={credentials.password}
            onChange={handleChange}
          />
        </label>

        <br />

        {isLoading && 
          <Loader 
          type="BallTriangle" 
          color="#00BFFF" 
          height={80} 
          width={80} />}

        {!isLoading &&
          <input
            name='submit'
            type='submit'
            value='Submit'
          />}
      </form>
    
    </div>
  )
}

export default Login