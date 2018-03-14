import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainApp from './App';
import About from './About';

class Routes extends React.Component {
  render() {
    return (
      <Router>  
        <div>
            <Route exact path="/" component={MainApp} />
            <Route exact path="/about" component={About} something="foo" />
        </div>
      </Router>
    );
  }
}

export default Routes;
