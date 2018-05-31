import React, { Component } from 'react'
import Login from './Login'
import Home from './Home'
import Projects from './Projects'
import Calendar from './Calendar'
import ContactMe from './ContactMe'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Home' component={Home} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Calendar' component={Calendar} />
            <Route path='/ContactMe' component={ContactMe} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
