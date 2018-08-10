import React, { Component } from 'react';
import logo from './logo.svg';
import MenuBar from './components/MenuBar'
import MessageList from "./components/MessageList"
import SendMessageForm from "./components/SendMessageForm"
import './App.css';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]

class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      sender: "Austin"
    }
  }

  render() {
    return (
      <div className="app">
        <MenuBar />
        <MessageList sender={this.state.sender}/>
        <SendMessageForm />
     </div>
    )
  }
}

export default App;
