import React, { Component } from 'react'
import Nav from './Nav'
import Confirm from './Confirm';
import './MyPage.css'


class MyPage extends Component {
    state = {
    }
    getEvents = async () => {
        try {
            const response = await fetch('http://localhost:3001/Calendar')
            const event = await response.json()
            this.setState({ event })
        } catch (error) {
            this.setState({ errorMessage: error })
        }
    }

    componentDidMount() {
        this.getEvents()
    }

    displayEvent = () => {
        console.log(this.state.event)
        return this.state.event.map((key) => {
            console.log(key)
            return (
                <div key={key._id} className="item">
                    {key.newPersonName}<br/>
                    {key.newEmail}<br/>
                    {key.newDate} <Confirm updateEvent={(e) => {
                        e.preventDefault()
                        this.updateEvent({
                            _id: key._id,
                            newDate: key.newDate,
                            newEmail: key.newEmail,
                           newPersonName: key.newPersonName,
                            confirm: true
                        })
                    }
                    } /><button onClick={(e) => {
                        this.deleteEvent(key)
                    }}>
                        Cancel
                    </button>
                </div>
            )
        })

    }

    updateEvent = async (theData) => {
        console.log('hit the function', theData)

        const updateData = {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(theData)
        }
        const updateEventData = await fetch('http://localhost:3001/Calendar', updateData)
        const event = await updateEventData.json()
        this.getEvents()
    }

    deleteEvent = async (eventData) => {
        const deleteData = {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify(eventData)
        }
        const deleteEventData = await fetch('http://localhost:3001/Calendar', deleteData)
        const event = await deleteEventData.json()
        this.getEvents()
    }

    render() {
        console.log(this.state.event)
        if (!this.state.event) {
            return <div>loading</div>
        }
        return (
            <div className="myPage">
                <div className="admin-top">
                <Nav />
                </div>
                <div className="masterList">
                {this.displayEvent()}
                </div>
            </div>
        )
    }
}

export default MyPage