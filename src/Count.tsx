import React from 'react';
import CounterScoreWindow from "./CounterScoreWindow";
import Button from "./Button";

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
        <div className='counter'>
            <CounterScoreWindow score={props.score}/>
            <div className='button-container'>
                <Button title={'inc'} onClick={props.inc} disabled={props.score === props.maxValue || props.error !=''}/>
                <Button title={'reset'} onClick={props.reset} disabled={props.score  === props.startValue || props.error !=''}/>

            </div>

        </div>
    )
}

export default Count;