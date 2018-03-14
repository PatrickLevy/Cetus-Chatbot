import React from 'react';
import Header from './Header';

export default (props) => (
    <div className="aboutContainer">
        
        <Header />
       
        <div id="aboutText">
            <p> 
                A chatbot is a term commonly used for a computer program that provides a humanlike
                ability to engage in a natural language conversation with the program’s user. A chatbot
                program could provide a simple text input and output interface, or a more sophisticated
                voice based interface. The chatbot program could be run alone as its own application,
                run on a small computer installed inside of a creature like structure for aesthetic value,
                or incorporated as just a single part of a larger application that contains additional
                functionality.
            </p>
            <p>
                There are many ways in which the functionality of a chatbot could be built depending on
                the goals of the project. Many existing libraries with various API’s are available to
                perform some or all of the required functionality for building a chatbot. For example, one
                could use the Google Assistant API to gain much of the functionality of the Google
                Assistant application that is available on Android phones (see ​ Google AIY Kit​ ). One
                could also use the IBM Watson cloud service (see ​ IBM Watson Conversation​ ) and
                utilize it’s artificial intelligence functionality. Alternatively, a chatbot could also be built in
                a more custom manner by utilizing more general machine learning and artificial
                intelligence libraries (see ​ TensorFlow​ ).
            </p>
            <p>
                Our objective in building a chatbot is to focus on the machine learning and artificial
                intelligence aspects of our program. We would like to build as much of this functionality
                ourselves as possible, but we also recognize what a massive undertaking this could be.
                Our team is planning to build a chatbot application that a user can interact with using
                conversational English. Our initial implementation will require the user to type in text
                through the command line, and the chatbot will respond by outputting text back out to
                the command line.
            </p>
            <p>
                The chatbot should be able to answer basic questions asked of it by the user. It should
                also be able to respond with information that is relevant to the user’s inputs, as well as
                be able to ask its own follow up questions.
                We hope to incorporate voice to text and text to voice functionality in our final project,
                but we are not going to focus on that initially.
            </p>
        </div>
        <div id="authors">
            <h2>Authors</h2>
            <p>Erick Brownfied</p>
            <p>Patrick Levy</p>
            <p>Johnny Sanchez</p>
        </div>

        <footer>

        </footer>
    </div>
);
