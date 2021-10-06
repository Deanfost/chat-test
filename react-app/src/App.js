import React from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: [], room: '', user: ''};
    this.socket = io('localhost:3000');
  }

  componentDidMount() {
    // Setup socket connection

  }

  componentWillUnmount() {
    // Destroy socket connection
    
  }

  render() {
    return (
      <div>
        <div className=".room-div">
          <button>Join room</button>
        </div>
        <MessageList messages={[]}></MessageList>
      </div>
    );
  }
}

export default App;
