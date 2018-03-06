import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

function ChatMessage(props) {
  if(props.currentState.responses.length > 0) {
    return (
      <div>
        <p className="message bot">{props.currentState.userInput}</p>
        <p className="message user">{props.currentState.responses.slice(-1)[0].botResponse}</p>
      </div>
    );
  }
}

let id = 0;

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
    axios.get('http://184.105.3.121:3001/cetus', {
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
      // console.log('Responses before:', responses);
      responses.push({
        userMessage: this.state.userInput,
        botResponse: response.data,
        key: id
      });
      // console.log('Responses after:', responses);
      this.setState ({

          responses: responses
          // responses: state.responses.push({
          //   userMessage: state.userInput,
          //   botResponse: response.data
          // })

      });
      id += 1;
    })
    .catch(function (error) {
      console.log(error);
      alert("Message could not be sent, please try again.");
    });
    // console.log(this.state.userInput);
  }

  render() {
    // console.log("this.state", this.state);
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
              {this.state.responses.map(function(message, index){
                  return (
                      <ChatMessage currentState={this.state} key={id} />
                  );
              }.bind(this))}

          </div>
          <div className="chatSubmit">
              <input type="text" id="chatInput" onChange={(e) => this.handleUserInput(e)} />
              <button type="submit" id="submitButton" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
          <footer>

          </footer>
      </div>
    );
  }
}

export default App;
