import { useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        // In this each line will update the value of count as prevCount take the value of previous count and update it
        // count < 20 ? setCount((prevCount) => prevCount + 1) : setCount(count);
        // count < 20 ? setCount((prevCount) => prevCount + 1) : setCount(count);
        // count < 20 ? setCount((prevCount) => prevCount + 1) : setCount(count);
        // count < 20 ? setCount((prevCount) => prevCount + 1) : setCount(count);

        // In this case all four will considered as bundle and value of count will be updated by 1 onle
        // count < 20 ? setCount(count + 1) : setCount(count);
        // count < 20 ? setCount(count + 1) : setCount(count);
        // count < 20 ? setCount(count + 1) : setCount(count);
        // count < 20 ? setCount(count + 1) : setCount(count);
        count < 20 ? setCount(count + 1) : setCount(count);
    };
    const removeValue = () => {
        count > 0 ? setCount(count - 1) : setCount(count);
    };
    return (
        <>
            <h1>Count : {count}</h1>
            <div className="card">
                <button onClick={handleCount}>
                    Add Value <t /> {count}
                </button>
                <br />
                <button onClick={removeValue}>
                    Remove Value <t /> {count}
                </button>
                <p>
                    <br />
                    <b>Count is {count}</b>
                </p>
            </div>
        </>
    );
}

export default App;
