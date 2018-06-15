import React, { Component } from 'react'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'
import './Admin.css'

class Admin extends Component {
    state = {
        redirect: false,
        password: ""
    }
    doneWithPage = () => {
        this.setState({
            redirect: true
        })
    }
    validatePass = () => {
        if (this.state.password === "welcome") {
            return this.setState({redirect: true})
        }
    }
    render(){
        const {redirect} = this.state
        if (redirect){
        return <Redirect to ='/MyPage'/>
        }
        return(
            <div className="admin-page">
                <Nav/>
                <div>
                    <h1>Admin Login:</h1>
                    Username:<br/>
                    <input type="text" name="username" pattern="palopro" required/><br/>
                    Password:<br/>
                    <input id= "password" type="password" onChange={(e) => {
                        this.setState({password: e.target.value})
                    }} required/><br/>
                    <input type="submit" value="Login" onClick={this.validatePass}/>
                </div>
            </div>
        )
    }
}

export default Admin