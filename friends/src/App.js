import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList'
import './App.css';

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
        {this.state.data.map(friend => (
          <FriendsList 
            key={friend.id}
            friend={friend}
          />
        ))}
        <form>
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
        </form>
      </div>
    );
  }
}

export default App;
