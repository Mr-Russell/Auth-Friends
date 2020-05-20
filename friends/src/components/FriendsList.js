import React, {useEffect, useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendForm from './FriendForm.js'

const blankForm = {
  name: '',
  email: '',
  age: '',
}

const FriendsList = (props) => {
  const [myFriends, setMyFriends] = useState([])
  const [formValues, setFormValues] = useState(blankForm)

  useEffect(()=>{
    axiosWithAuth()
      .get('api/friends')
      .then(res =>{
        console.log(res)
        setMyFriends(res.data)
      })
  }, [])

  const postFriend = friend => {
    axiosWithAuth()
      .post('/api/friends', friend)
      .then(res => {
        // console.log('postFriend Result:',res.data)
        setMyFriends([...myFriends, res.data])
      })
      .catch(err => console.log(err))
  }

  const submitFriend = e => {
    e.preventDefault()

    const newFriend = {
      name: formValues.name,
      email: formValues.email,
      age: formValues.age
    }

    postFriend(newFriend)
    setFormValues(blankForm)
  }

  const inputChange = e =>{
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  return(
    <div>
      <h1>Friends List</h1>
      <br />
      {myFriends.map(item=>{
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Email: {item.email}</p>
            <p>Age: {item.age}</p>
            <br />
          </div>
        )
      })}
      <FriendForm 
        values={formValues}
        submitFriend={submitFriend}
        inputChange={inputChange}
      />
    </div>
  )
}

export default FriendsList