import React, { Component } from 'react'
import Nav from './Nav'
import Confirm from './Confirm';


class MyPage extends Component {
    state = {
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

    componentDidMount(){
        this.getEvents()
    }

    displayEvent = () => {
            console.log(this.state.event)
            return this.state.event.map((key)=> {
                console.log(key)
                return (
                    <div key={key._id}>
                        {key.newDate} <Confirm updateEvent={(e)=>{
                            e.preventDefault()
                            this.updateEvent({
                                _id: key._id,
                                confirm: true
                            })}
                        }/>
                    </div>
                )
            })
        
    }

    updateEvent = async (theData) => {
        console.log('hit the function')
        const dataFromConfirm = {"_id": theData}
        const updateData = {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify(dataFromConfirm)
        }
        const updateEventData = await fetch('http://localhost:3001/Calendar', updateData)
        const event = await updateEventData.json()
        this.setState({ event })
    } 

    render(){
        console.log(this.state.event)
        if(!this.state.event){
            return <div>loading</div>
        }
        return(
            <div>
                <Nav/>
                {this.displayEvent()}
            </div>
        )
    }
}

export default MyPage