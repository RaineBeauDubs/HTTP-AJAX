import React from 'react';
import styled from 'styled-components';


const FriendCard = styled.div`
  border: 5px solid rgb(166, 190, 161);
  width: 265px;
  margin: 5px;
  padding: 10px;
  border-radius: 10%;
  background:  rgb(255, 205, 186);`

const GreenSpan = styled.span`
  color: rgb(166, 190, 161);
  font-weight: bold;
  font-size: 15px;`

const TrashCan = styled.div`
  border: 1px solid black;
  cursor: pointer;
  background: rgb(166, 190, 161);`

const FriendsList = (props) => {
  return (
    <FriendCard>
      <h2>{props.friend.name}</h2>
      <h3><GreenSpan>Age:</GreenSpan><br/>{props.friend.age}</h3>
      <h3><GreenSpan>E-Mail Address:</GreenSpan><br/>{props.friend.email}</h3>
      <TrashCan onClick={() => props.deleteFriend(props.friend.id)}>
        <i className="fas fa-trash-alt"></i>
      </TrashCan>
    </FriendCard>
  )
}

export default FriendsList;