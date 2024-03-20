import { useState } from "react";
import "./App.css";
function App() {
    const [color, setColor] = useState("red");
    return (
        <>
            <div
                className="w-full h-screen duration-200"
                style={{ backgroundColor: color }}
            >
                <div className=" flex flex-wrap justify-center bottom-12 insert-x-0 px-2 ">
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl ">
                        <button
                            onClick={() => setColor("red")}
                            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                            style={{ backgroundColor: "red" }}
                        >
                            Red
                        </button>
                        <button
                            onClick={() => setColor("blue")}
                            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                            style={{ backgroundColor: "blue" }}
                        >
                            Blue
                        </button>
                        <button
                            onClick={() => setColor("black")}
                            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                            style={{ backgroundColor: "black" }}
                        >
                            Black
                        </button>
                        <button
                            onClick={() => setColor("green")}
                            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                            style={{ backgroundColor: "green" }}
                        >
                            Green
                        </button>
                        <button
                            onClick={() => setColor("olive")}
                            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                            style={{ backgroundColor: "olive" }}
                        >
                            Olive
                        </button>
                        <button
                            onClick={() => setColor("purple")}
                            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                            style={{ backgroundColor: "purple" }}
                        >
                            Purple
                        </button>
                        <button
                            onClick={() => setColor("orange")}
                            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                            style={{ backgroundColor: "orange" }}
                        >
                            Orange
                        </button>
                        <button
                            onClick={() => setColor("yellow")}
                            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
                            style={{ backgroundColor: "yellow" }}
                        >
                            Yellow
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
