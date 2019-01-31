import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList'
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div`
  text-align: center;`

const FriendListAndForm = styled.div`
  display: flex;
  justify-content: space-evenly;`

const FriendDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 68%;`

const FriendForm = styled.form`
  width: 28%;`

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;`


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: '',
      age: 0,
      email: ''
    }
  };

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  };

  friendInput = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value })
  };

  addNewFriend = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      })
    this.setState({
      name: '',
      age: 0,
      email: ''
    })
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      })

  }

  render() {
    return (
      <AppWrapper>
        <h1>Hello, Friends!</h1>
        <FriendListAndForm>
          <FriendDiv>
            {this.state.data.map(friend => (
              <FriendsList
                key={friend.id}
                friend={friend}
                name={friend.name}
                age={friend.age}
                email={friend.email}
                deleteFriend={this.deleteFriend}
              />
            ))}
          </FriendDiv>
          <FriendForm onSubmit={this.addNewFriend}>
            <h2>Add a New Friend...</h2>
            <FormInputs>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.friendInput}
              />
              <input
                name="age"
                type="number"
                placeholder="Age"
                value={this.state.age}
                onChange={this.friendInput}
              />
              <input
                name="email"
                type="text"
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.friendInput}
              />
              <button type="submit">Add New Friend!</button>
            </FormInputs>
          </FriendForm>
        </FriendListAndForm>
      </AppWrapper>
    );
  }
}

export default App;
