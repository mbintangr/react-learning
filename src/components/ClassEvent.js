import { Component } from "react";
import React from 'react';

class ClassEvent extends Component {
    handleClick = () => {
        console.log("Clicked!");
    }

    render() {
        return (
            <div>
                <div>
                    Class Component
                </div>

                <button onClick={this.handleClick}>Click here!</button>
            </div>
        )
    }
}

export default ClassEvent;