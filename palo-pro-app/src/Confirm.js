import React, { Component } from 'react'

class Confirm extends Component {
    
    render() {
        return(
            <div>
                <button onClick={this.props.updateEvent}>
                    Confirm
                </button>
            </div>
        )
    }
}

export default Confirm