import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'> Login </Link>
                    |<Link to='/Home'> Home </Link>
                    | <Link to='/Projects'> Projects </Link>
                    |<Link to='/Calendar'> Calendar </Link>
                    | <Link to='/ContactMe'> Contact Me </Link>
                </nav>
            </div>
        )
    }
}

export default Nav