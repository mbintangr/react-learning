import React from 'react';

const FunctionEvent = () => {

    const handleClick = () => {
        console.log("Clicked!");    
    }

    return (
        <div>
            Functional Component 
            <button onClick={handleClick}>Click here!</button>
        </div>
    )
}

export default FunctionEvent;