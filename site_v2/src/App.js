import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const synth = window.speechSynthesis;

function ChatMessage(props) {
  return (
    <div className="dialogue">
      
      <p className="message user">
        <i className="icon fa fa-2x fa-user"/>
        {props.message.userMessage}
      </p>
      
      <p className="message bot">
        <i className="icon fa fa-2x fa-android"/>
        {props.message.botResponse}
      </p>

    </div>
  );
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      userInput: '',
      responses: [],
    }
  }

  talk(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = '1';
    utterance.rate = '1';
    synth.speak(utterance);
  }

  handleUserInput (e) {
    this.setState ({
      userInput: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    // Send the user text to our api to get a response
    axios.get('https://184.105.3.121:3001/cetus', {
      params: {
        userText: this.state.userInput
      }
    })
    .then( (response) => {
      // Speak the response
      this.talk(response.data);

      // Add the response to state to keep track of our conversation
      // ...and clear the current userInput value
      let responses = this.state.responses;
      responses.push({
        userMessage: this.state.userInput,
        botResponse: response.data,
      });
      this.setState ({
        responses: responses,
        userInput: '',
      });
    })
    .catch(function (error) {
      console.error(error);
      alert("Message could not be sent, please try again.");
    });
  }

  render() {
    return (
      <div className="container">
          <header>
              <h1>Cetus Chatbot</h1>
              <nav>
                  <a href="index.html">Chat</a>
                  <a href="about.html">About</a>
              </nav>
          </header>

          <div className="chatbox">
              <p className="message bot">
                <i className="icon fa fa-2x fa-android"/>
                Hey, lets talk!
              </p>
              
              {
                this.state.responses.map((message, index) => {
                  return (
                      <ChatMessage message={message} key={index} />
                  );
                })
              }
              {
                this.state.userInput ?
                  <p className="message user">
                    <i className="icon fa fa-2x fa-user"/>
                    {this.state.userInput}
                  </p> :
                  null
              }

          </div>
          <div className="chatSubmit">
              <input type="text" id="chatInput" value={this.state.userInput} onChange={(e) => this.handleUserInput(e)} />
              <button type="submit" id="submitButton" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
          <footer>

          </footer>
      </div>
    );
  }
}

export default App;
