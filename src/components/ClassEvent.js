import { Component } from "react";

class ClassEvent extends Component {
    handleClick = () => {
        console.log("Clicked!");
    }

    render() {
        return (
            <>
                <div>
                    Class Component
                </div>

                <button onClick={this.handleClick}>Click here!</button>
            </>
        )
    }
}

export default ClassEvent;