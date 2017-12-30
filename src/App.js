import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Btn extends Component {
  render() {
    return (
      <div className='btn yellow'>
          Add new note
      </div>
    )
  }
}

class Post extends Component {
  render() {
    return (
        <div className='note'>
          <div>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </div>
          <hr/>
          <h2>note 1</h2>
          <hr/>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Remember me</h1>
        <Btn/>
        <Post/>
        <Post/>
      </div>
    );
  }
}

export default App;
