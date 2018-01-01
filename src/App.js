import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let fakeServerData = {
  user: {
    name: 'Betsy',
    notes: [{
        title: "supermarket list",
        text: "I need to buy fruits, yogurths and more items"
      }
    ]
  }

}

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
          <h2>{this.props.notes[0].title}</h2>
          <hr className='line'/>
          <div id='text'>{this.props.notes[0].text}</div>
        </div>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);

  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 className="App-title">
            {this.state.serverData.user.name}'s to do list
          </h1>
          <Btn/>
          <Post notes={this.state.serverData.user.notes}/>
        </div> : <h2>Loading...</h2>
        }
      </div>
    );
  }
}
export default App;
