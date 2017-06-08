import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/somedata')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log);
  }

  render() {
    console.log(this.state.data);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
