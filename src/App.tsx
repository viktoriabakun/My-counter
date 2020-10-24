import React, {useState} from 'react';
import Count from "./Count";
import Settings from "./Settings";
import './App.css'

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

    const setButton = () => {
        console.log('set button')
    }

    return (
        <div className={'App'}>
            <Settings setButton={setButton}/>
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
