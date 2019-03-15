import React from 'react';
import styled from 'styled-components';

const FriendForms = styled.form`
  width: 28%;`

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;`

function FriendForm(props) {
  return (
    <FriendForms onSubmit={props.addNewFriend}>
      <h2>Add a New Friend...</h2>
      <FormInputs>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={props.friend.name}
          onChange={props.friendInput}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={props.friend.age}
          onChange={props.friendInput}
        />
        <input
          name="email"
          type="text"
          placeholder="E-mail"
          value={props.friend.email}
          onChange={props.friendInput}
        />
        <button type="submit">Add New Friend!</button>
      </FormInputs>
    </FriendForms>
  )
}


export default FriendForm;