import React, { Component } from 'react'

class Login extends Component {
    render(){
        return(
            <div>
                <form>
                    First name:<br/>
                    <input type="text" name="firstname"/><br/>
                    Last name:<br/>
                    <input type="text" name="lastname"/>
                </form>
            </div>
        )
    }
}

export default Login