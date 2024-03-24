import { useState, useEffect } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    const incCount = () => {
        setCount((currCount) => currCount + 1);
    };

    useEffect(() => {
        console.log("This is the side effect");
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>+1</button>
        </div>
    );
}
