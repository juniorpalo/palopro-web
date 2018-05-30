import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <nav>
        <Link to ='/'> Home </Link>
      </nav>
      <Route exact path='/' component={Home}/>
      </div>
      </Router>
    );
  }
}

export default App;
