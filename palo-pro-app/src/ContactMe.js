import React, { Component } from 'react'
import Nav from './Nav'

class ContactMe extends Component {
    
    render(){
        return(
            <div>
            <Nav/>
            <form class name="email" action="/thisIsAPlaceHolder.php" method="post">
            Email: <input type="text" name="email"/><br/>
            Subject: <input type="text" name="subject" maxlength="35"/><br/>
            Message: <br/><textarea rows="20" cols="70"></textarea>
            </form>
            </div>
        )
    }
}

export default ContactMe