import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

function ChatMessage(props) {
  // return (
  //
  // );
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      userInput: null,
      responses: [],
    }
  }

  handleUserInput (e) {
    // console.log("Hello!", e.currentTarget.value);
    this.setState ({
      userInput: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    axios.get('http://138.68.45.183:3001/cetus', {
      params: {
        userText: this.state.userInput
      }
    })
    .then( (response) => {
      // console.log(response);
      // this.setState ({
      //   responses: this.state.responses.push({
      //     userMessage: this.state.userInput,
      //     botResponse: response.data,
      //   }),
      // });

      let responses = this.state.responses;
      console.log('Responses before:', responses);
      responses.push({
        userMessage: this.state.userInput,
        botResponse: response.data
      });
      console.log('Responses after:', responses);
      this.setState ({

          responses: responses
          // responses: state.responses.push({
          //   userMessage: state.userInput,
          //   botResponse: response.data
          // })

      });
    })
    .catch(function (error) {
      console.log(error);
    });
    // console.log(this.state.userInput);
  }

  render() {
    console.log("this.state", this.state);
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

              <p className="message bot">Hey, lets talk!</p>
              <p className="message user">Hello!</p>

          </div>
          <div className="chatSubmit">
              <input type="text" id="chatInput" onChange={(e) => this.handleUserInput(e)} />
              <button type="submit" id="submitVoice"></button>
              <button type="submit" id="submitButton" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
          <footer>

          </footer>
      </div>
    );
  }
}

export default App;
