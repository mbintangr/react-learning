import { useState } from "react";

const FunctionalCounter = () => {
    
    const [ counter, setCounter ] = useState(0);
    
    const increment = () => {
        setCounter(counter + 1);
    }
    
    return (
        <div>
            <h3>Functional Counter</h3>
            <p>Counter Value = {counter}</p>
            <button onClick={increment}>CLICK ME!</button>
        </div>
    )
}

export default FunctionalCounter;