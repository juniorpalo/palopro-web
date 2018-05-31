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
      <nav>
        <Link to ='/'> Login </Link>
        <Link to ='/Home'> || Home </Link>
        <Link to ='/Projects'> || Projects </Link>
        <Link to ='/Calendar'> || Calendar </Link>
        <Link to ='/ContactMe'> || Contact Me </Link>
      </nav>
      <Route exact path='/' component={Login}/>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/Projects' component={Projects}/>
      <Route exact path='/Calendar' component={Calendar}/>
      <Route exact path='/ContactMe' component={ContactMe}/>
      </div>
      </Router>
    );
  }
}

export default App;
