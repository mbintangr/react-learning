import { Component } from 'react'
import React from 'react';

class Resume extends Component {
    render() {
        const { name } = this.props;
        return <h2>This is {name}'s Resume</h2>
    }
}

export default Resume;