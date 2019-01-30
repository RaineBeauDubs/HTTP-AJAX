import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList'
import styled from 'styled-components';
import './App.css';

const FriendListAndForm = styled.div`
  display: flex;
  justify-content: space-evenly;`

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;`


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, HTTP/AJAX!</h1>
        <FriendListAndForm>
          <div>
            {this.state.data.map(friend => (
              <FriendsList
                key={friend.id}
                friend={friend}
              />
            ))}
          </div>
          <form>
            <h2>Add a New Friend...</h2>
            <FormInputs>
              <input
                type="text"
                placeholder="Name"
              />
              <input
                type="number"
                placeholder="Age"
              />
              <input
                type="text"
                placeholder="E-mail"
              />
              <button type="submit">Add New Friend!</button>
            </FormInputs>
          </form>
        </FriendListAndForm>
      </div>
    );
  }
}

export default App;
