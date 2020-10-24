import React from 'react';
import CounterScoreWindow from "./CounterScoreWindow";
import Button from "./Button";

export type CountProps = {
    score: number
    inc: () => void
    reset: () => void
}

const Count = (props: CountProps) => {
    return (
        <div className='counter'>
            <CounterScoreWindow score={props.score}/>
            <div className='button-container'>
                <Button title={'inc'} onClick={props.inc} disabled={false}/>
                <Button title={'reset'} onClick={props.reset} disabled={false}/>

            </div>

        </div>
    )
}

export default Count;