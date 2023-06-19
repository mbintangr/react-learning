import { Component } from 'react';

class Message extends Component {
    render() {
        return <h2>This is a Message: {this.props.messageContent}</h2>;
    }
}

export default Message;