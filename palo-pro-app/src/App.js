import React, { Component } from 'react'
import Admin from './Admin'
import Home from './Home'
import Projects from './Projects'
import Calendar from './Calendar'
import ContactMe from './ContactMe'
import MyPage from './MyPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Admin} />
            <Route path='/Home' component={Home} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Calendar' component={Calendar} />
            <Route path='/ContactMe' component={ContactMe} />
            <Route path='/MyPage' component={MyPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
