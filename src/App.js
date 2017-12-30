import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Btn extends Component {
  render() {
    return (
      <div className='btn yellow'>
          + Add a new note
      </div>
    )
  }
}

class Post extends Component {
  render() {
    return (
        <div className='note'>
          <div className='icons'>
            <i class="fa fa-pencil-square-o padding" aria-hidden="true"></i>
            <i class="fa fa-trash-o padding" aria-hidden="true"></i>
          </div>
          <div className='clearfix'></div>
          <hr className='line'/>
          <h2>note 1</h2>
          <hr className='line'/>
          <div id='text'> hoy tengo que comprar blalalallalas</div>
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
