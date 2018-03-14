import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
    <header>
            <h1>Cetus Chatbot</h1>
            <nav>
                <Link to="/">Chat</Link>
                <Link to="about">About</Link>
            </nav>
    </header>
)