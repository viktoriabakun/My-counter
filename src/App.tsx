import React, {useState} from 'react';
import './App.css';
import Count from "./Count";

function App() {

    let [score, setScore] = useState(0)

    const incCounter = () => {
        setScore(score + 1)
    }

    const resetCounter = () =>{
        setScore(0)

    }

    return (
        <div className="App">
            <Count score={score} inc={incCounter} reset={resetCounter}/>
        </div>
    );
}

export default App;
