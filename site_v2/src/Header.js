import React from 'react';

export default (props) => (
    <header>
            <h1>Cetus Chatbot</h1>
            <nav>
                <a onClick={() => props.handleRouteChange('chat')}>Chat</a>
                <a onClick={() => props.handleRouteChange('about')}>About</a>
            </nav>
    </header>
)