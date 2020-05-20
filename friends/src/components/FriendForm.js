import React from 'react'

const FriendForm = (props) => {

  return(
    <div>
      <h3>Add A Friend!</h3>
      <form onSubmit={props.submitFriend}>
        <label>Name:
          <input
            name='name'
            type='text'
            value={props.values.name}
            onChange={props.inputChange}
          />
        </label>

        <br />
        
        <label>Email:
          <input
            name='email'
            type='text'
            value={props.values.email}
            onChange={props.inputChange}
          />
        </label>

        <br />

        <label>Age:
          <input
            name='age'
            type='number'
            value={props.values.age}
            onChange={props.inputChange}
          />
        </label>

        <br />

        <input
          name='submit'
          type='submit'
          value='Add Friend!'
        />
      </form>
    </div>
  )
}

export default FriendForm