import React from 'react';
import './App.css'


export type CounterScoreWindowProps = {
    score: number
    maxValue: number
    error: string
}

function CounterScoreWindow(props: CounterScoreWindowProps) {
    const {score, error, maxValue} = props
    return (
        <div className={'screen'}>
            <div className={score === maxValue ? 'error' : ''}>{error ? '' : score}</div>
            <div className='textError'>{error? error : '' }</div>

        </div>
    );
}

export default CounterScoreWindow;
