import React, {useState} from 'react';
import Count from "./Count";
import Settings from "./Settings";
import './App.css'

function App() {

    let [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    let [score, setScore] = useState<number>(startValue)
    const [error, setError] = useState<string>('')

    const incCounter = () => {
        if (score < maxValue) {
            setScore(score + 1)
        }

    }

    const resetCounter = () => {
        setScore(startValue)
    }


    return (
        <div className={'App'}>
            <Settings startValue={startValue}
                      setStartValue={setStartValue}
                      maxValue={maxValue}
                      setMaxValue={setMaxValue}
                      error={error}
                      setError={setError}
                      score={score}
                      setScore={setScore}
            />
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
