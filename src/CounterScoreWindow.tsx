import React from 'react';
import './App.css';


export type CounterScoreWindowProps = {
    score: number
}

function CounterScoreWindow(props: CounterScoreWindowProps) {
    return (
        <div className="counterScoreWindow">
            <p>{props.score}</p>
        </div>
    );
}

export default CounterScoreWindow;
