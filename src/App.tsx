import React, {useState} from 'react';
import './App.css';
import Count from "./Count";

function App() {

    let [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    let [score, setScore] = useState<number>(startValue)
    const [error, setError] = useState<string>('')

    const incCounter = () => {
        if (score < maxValue) {
            setScore(score + 1)
        }

    }

    const resetCounter = () => {
        setScore(0)

    }

    return (
        <div className="App">
            <Count score={score}
                   inc={incCounter}
                   reset={resetCounter}
                   error={error}
                   maxValue={maxValue}
                   startValue={startValue}
            />
        </div>
    );
}

export default App;
