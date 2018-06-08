import React, { Component } from 'react'
import Nav from './Nav'
import ReactPropTypes from 'prop-types'

class Calendar extends Component {
    state = {
        eventInformation: {
            newPersonName: "",
            newEmail: "",
            newDate: "",
        }
    };

    
    static propTypes = {
        createEvent: ReactPropTypes.func.isRequired
    }

    handleOnChange = (event) => {
        if (event.target.id === "nameInput"){
            this.setState({eventInformation:{
                newPersonName: event.target.value
            }
            })
        }

        else if (event.target.id === "emailInput"){
            this.setState({eventInformation:{
                newEmail: event.target.value
            }
            })
        }

        else if (event.target.id === "dateInput"){
            this.setState({eventInformation:{
                newDate: event.target.value
            }
            })
        }

    }

    createEvent = (event) => {
        this.setState((prev) => {
            const existingEvents = prev.event
            existingEvents.push(event)

            return{
                events: existingEvents
            }
        })
    }

    getEvents = async () => {
        try{
            const response = await fetch('http://localhost:3001/Calendar')
            const event = await response.json()
            this.setState({ event })
        } catch (error){
            this.setState({ errorMessage: error })
        }
    }

    handleOnCLick = async () => {
        const postInit = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.eventInformation)
        }
        console.log("click was clicked")
        try{
            const postEventResponse = await fetch('http://localhost:3001/Calendar', postInit)
            const event = await postEventResponse.json()
            this.createEvent(event)
        } catch (error) {
            this.setState({errorMessage: error})
        }
    }

    componentDidMount(){
        this.getEvents()
    }

    displayEvent = () => {
        if (this.state.event){
            console.log(this.state.event)
            return this.state.event.map((key)=> {
                console.log(key)
                return (
                    <div key={key._id}>
                        {key.newDate}
                    </div>
                )
            })
        }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Nav />
                <div>
                    <div><label>Name:</label><input id="nameInput" onChange={this.handleOnChange}/></div>
                    <div><label>Email:</label><input id="emailInput" type ="email" onChange={this.handleOnChange}/></div>
                    <div><label>Date:</label><input id="dateInput" type ="datetime-local" onChange={this.handleOnChange}/></div>
                    <button onClick={this.handleOnCLick}>New Event</button>
                    
                </div>
                {this.displayEvent()}
            </div>
        )
    }
}

export default Calendar