import React, { Component } from 'react';
import './Home.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Nav from './Nav'

class Home extends Component {
    render(){
        return(
            <div className="home-page">
            <div className="home-top">
            <Nav/>
               <img className="profile" src="/images/DSC05418.jpg" alt="ME"/>
                <h1>Palomino Productions</h1>
            </div>
            <div className="home-mid">
            <h2>About Me:</h2>
            <p>My name is Juan Carlos Palomino. I also go by Junior. 21 year old Filmmaker and Developer. My hobbies 
                <br/>include movies, collecting music, foreign languages (I speak two: Spanish and Japanese), coding (I coded this website myself), and a good story.</p>
            <p>My love for movies started at a very young age, watching Star Wars and other classics with my dad. 
                <br/>I started getting into video in high school and have been hooked ever since. I started Palomino Productions
                <br/> as an outlet for me to express my passion and to satisfy my creative drive. Part of that includes helping to tell other
                <br/> people’s stories and to eventually help them better remember a very important moment in life. Feel free to contact 
                <br/>me with any inquires, along with information on the event you want me to cover. I can’t wait to work with you! </p>
            </div>
            <SocialIcon url="https://www.linkedin.com/in/juan-carlos-palomino-jr/"/>
            <SocialIcon url="https://www.instagram.com/palominoproductions/"/>
            <SocialIcon url="https://twitter.com/juniorpalo"/>
            <SocialIcon url="https://www.facebook.com/junior.palomino.77"/>
            </div>
        )
    }
}

export default Home