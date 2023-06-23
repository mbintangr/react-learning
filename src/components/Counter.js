import {Component} from 'react'
import React from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            name: 'Bintang'
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        return (
            <div>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={this.increment}>Click It!</button>
            </div>
        )
    }
}

export default Counter;