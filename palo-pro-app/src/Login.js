import React, { Component } from 'react'
import Nav from './Nav'

class Login extends Component {
    render(){
        return(
            <div>
                <Nav/>
                <form action="/thisIsAPlaceHolder.php" method="post">
                <fieldset>
                    <h1>Login:</h1>
                    Email:<br/>
                    <input type="text" name="email"/><br/>
                    Password:<br/>
                    <input type="text" name="password"/><br/>
                    <input type="submit" value="Login"/>
                </fieldset>
                </form>
            </div>
        )
    }
}

export default Login