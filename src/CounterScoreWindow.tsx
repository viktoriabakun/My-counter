import React from 'react';
import './App.css';


export type CounterScoreWindowProps = {
    score: number
    maxValue: number
}

function CounterScoreWindow(props: CounterScoreWindowProps) {
    return (
        <div className="counterScoreWindow">
            <p className={props.score === props.maxValue ? 'error' : ''}>{props.score}</p>
        </div>
    );
}

export default CounterScoreWindow;
