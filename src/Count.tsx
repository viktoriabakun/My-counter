import React from 'react';
import CounterScoreWindow from "./CounterScoreWindow";
import Button from "./Button";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {getError, getMaxValue, getScore, getStartValue} from "./redux/count-selectors";
import {INC, RESET} from "./redux/count-actions";


export type CountProps = {
    score: number
    inc: () => void
    reset: () => void
    maxValue: number
    startValue: number
    error: string
}

const Count = (props: CountProps) => {

    const dispatch = useDispatch();
    const score = useSelector(getScore)
    const maxValue = useSelector(getMaxValue)
    const error = useSelector(getError)
    const startValue = useSelector(getStartValue)
    const inc = () => dispatch({type: INC})
    const reset = () => dispatch({type: RESET})

    return (
        <div className={'counter'}>
            <CounterScoreWindow score={score}
                                maxValue={maxValue}
                                error={error}/>
            <div className={'buttonContainer'}>
                <Button title={'inc'} onClick={inc}
                        disabled={score === maxValue || error != ''}
                        maxValue={maxValue}
                        score={score}
                />
                <Button title={'reset'} onClick={reset}
                        disabled={score === startValue || error != ''}
                        maxValue={maxValue}
                        score={score}/>

            </div>

        </div>
    )
}

export default Count;