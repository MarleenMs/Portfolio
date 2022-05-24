import React, {useState, useEffect} from "react";

export default function Contador() {
    const [count, setCount] = useState(0);
    useEffect(() => {document.title = `Counter: ${count}`;});

    return (
    <div>
        <p>Counter: {count} </p>
        <button className="App-button" onClick={() => setCount(count + 1)}>Add</button>
    </div>
    );
}