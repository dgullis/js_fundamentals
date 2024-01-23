import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count +1);
    };

    const decrementCounter = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCounter}>Increment the counter</button>
            <button onClick={decrementCounter}>Decrement the counter</button>
        </div>
    )
};

export default Counter;