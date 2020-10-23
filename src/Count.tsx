import React from 'react';
import CounterScoreWindow from "./CounterScoreWindow";
import Button from "./Button";

const Count = () => {
    return (
        <div className='counter'>
            <CounterScoreWindow/>
            <div className='button-container'>
                <Button title={'inc'} onClick={() => alert('btn inc')} disabled={false}/>
                <Button title={'reset'} onClick={() => alert('btn reset')} disabled={false}/>

            </div>

        </div>
    )
}

export default Count;