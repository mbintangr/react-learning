import {Component} from 'react'

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
            <>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={this.increment}>Click It!</button>
            </>
        )
    }
}

export default Counter;