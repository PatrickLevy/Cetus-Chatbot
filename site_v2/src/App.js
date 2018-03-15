import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';
import About from './About';

const synth = window.speechSynthesis;
const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

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
      loading: false,
      selectedPage: 'bot',
    }
  }

  scrollToBottom = () => {
    this.messagesEnd && this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  startListening() {
    console.log('listening!');
    const recognition = new SpeechRecognition();
    recognition.start();
    recognition.onresult = (event) => {
      console.log('event', event);
      const phrase = event.results[0][0].transcript;
      console.log('phrase', phrase);
      this.setState({ userInput: phrase });
      this.handleSubmit();
      
    }  
  }

  talk(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = '1';
    utterance.rate = '1';
    synth.speak(utterance);
  }

  handleKeyPress(e) {
    // handleUserInput is already handling changes to the
    // textbox, just watch here for Enter
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  handleUserInput (e) {
    // User typed a letter into the textbox
    this.setState ({
      userInput: e.currentTarget.value
    });
    // this.scrollToBottom();
  }

  handleRecord() {
    this.startListening()
  }

  handleSubmit (e) {
    // Keep the form from submitting and causing a hard refresh
    if (e) {
      e.preventDefault()  
    }
    
    // Set loading to true so that we can provide user feedback
    this.setState ({ loading: true });

    // Send the user text to our api to get a response
    axios.get('http://184.105.3.121:3001/cetus', {
      params: {
        userText: this.state.userInput
      }
    })
    .then( (response) => {
      // Set the loading flag to false
      this.setState( { loading: false });

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

  handleRouteChange(page) {
    console.log('page', page);
    this.setState({ selectedPage: page });
  }

  render() {
    if (this.state.selectedPage === 'about') {
    return (
        <About
          handleRouteChange={(page) => this.handleRouteChange(page)}
        />
      );
    }
    return (
      <div className="container">
          
          <Header
            handleRouteChange={(page) => this.handleRouteChange(page)}
          />

          <div className="chatbox">
              <p className="message bot">
                <i className="icon fa fa-2x fa-android"/>
                Hey, lets talk!
              </p>
              
              { /* Map over the list of previous messages to show history */}
              {
                this.state.responses.map((message, index) => {
                  return (
                      <ChatMessage message={message} key={index} />
                  );
                })
              }
              { /* Put the current userInput into a new chatMessage */}
              {
                this.state.userInput ?
                  <p className="message user">
                    <i className="icon fa fa-2x fa-user"/>
                    {this.state.userInput}
                  </p> :
                  null
              }

              { /* Loading... put up a chat response that indicates this*/}
              {
                this.state.loading ?
                  <p className="message bot">
                    
                    <i className="icon fa fa-2x fa-spinner fa-spin" />
                    Hang on a sec...
                  </p> : 
                  null
              }
              <div style={{ float:"left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
              </div>

          </div>
          <div className="chatSubmit">
              
              <input
                type="text"
                id="chatInput"
                value={this.state.userInput}
                onKeyPress={(e) => this.handleKeyPress(e)}
                onChange={(e) => this.handleUserInput(e)}
              />
              
              {/* <button
                id="recordButton"
                onClick={(e) => this.handleRecord(e)}>
                Record
              </button> */}
              
              <button
                type="submit"
                id="submitButton"
                onChange={(e) => this.handleSubmit(e)}
                onClick={(e) => this.handleSubmit(e)}>
                Submit
              </button>
          </div>
      </div>
    );
  }
}

export default App;
