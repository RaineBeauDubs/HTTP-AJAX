import React from 'react';
// import styled from 'styled-components';

// const TrashCan = styled.i`
//   border: 1px solid black;
//   cursor: pointer;`

const FriendsList = (props) => {
  return (
    <div>
      <h2>{props.friend.name}</h2>
      <h3>{props.friend.age}</h3>
      <h3>{props.friend.email}</h3>
    </div>
  )
}

export default FriendsList;