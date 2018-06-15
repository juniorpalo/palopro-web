import React, { Component } from 'react'
import Nav from './Nav'
import './ContactMe.css'

class ContactMe extends Component {
    
    render(){
        return(
            <div className="template-page">
            <Nav/>
            <div className="emailTemplate">
            <form class name="email" action="/thisIsAPlaceHolder.php" method="post">
            Email: <input type="text" name="email"/><br/>
            Subject: <input type="text" name="subject" maxlength="35"/><br/>
            Message: <br/><textarea rows="20" cols="70"></textarea>
            </form>
            </div>
            </div>
        )
    }
}

export default ContactMe