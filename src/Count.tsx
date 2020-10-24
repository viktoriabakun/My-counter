import React from 'react';
import CounterScoreWindow from "./CounterScoreWindow";
import Button from "./Button";
import './App.css'


export type CountProps = {
    score: number
    inc: () => void
    reset: () => void
    maxValue: number
    startValue: number
    error: string
}

const Count = (props: CountProps) => {
    return (
        <div className={'counter'}>
            <CounterScoreWindow score={props.score}
                                maxValue={props.maxValue}
                                error={props.error}/>
            <div className={'buttonContainer'}>
                <Button title={'inc'} onClick={props.inc}
                        disabled={props.score === props.maxValue || props.error != ''}
                        maxValue={props.maxValue}
                        score={props.score}
                />
                <Button title={'reset'} onClick={props.reset}
                        disabled={props.score === props.startValue || props.error != ''}
                        maxValue={props.maxValue}
                        score={props.score}/>

            </div>

        </div>
    )
}

export default Count;