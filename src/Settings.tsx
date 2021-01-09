import React, {useCallback, useEffect, useState} from 'react'
import Button from "./Button";
import './App.css'
import Input from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {getError, getMaxValue, getScore, getStartValue} from "./redux/count-selectors";
import {setError, setMaxValue, setScore, setStartValue} from "./redux/count-actions";


type SettingsProps = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    score: number
    setScore: (value: number) => void
    error: string
    setError: (error: string) => void

}


const Settings = (props: SettingsProps) => {

    const dispatch = useDispatch();
    const score = useSelector(getScore)
    const maxValue = useSelector(getMaxValue)
    const error = useSelector(getError)
    const startValue = useSelector(getStartValue)

    // const { error, maxValue, startValue, setError, setMaxValue, setStartValue, setScore, score } = props

    const [minValueLocal, setMinValueLocal] = useState<number>(0);
    const [maxValueLocal, setMaxValueLocal] = useState<number>(maxValue);

    const isError = useCallback(() => {
        if (minValueLocal < 0) {
            dispatch(setError('min не может быть меньше 0'))
        } else if (minValueLocal === maxValueLocal) {
            dispatch(setError('min не может быть равен max'))
        } else if (minValueLocal > maxValueLocal) {
            dispatch(setError('min не может быть больше max'))
        } else {
            dispatch(setError(''))
        }
    }, [minValueLocal, maxValueLocal, setError])

    useEffect(() => {
        isError()
    }, [minValueLocal, maxValueLocal, isError])


    const setButton = () => {

        dispatch(setStartValue(minValueLocal))
        dispatch(setMaxValue(maxValueLocal))
        dispatch(setScore(minValueLocal))
    }

    return (
        <div className={'counter'}>
            <div className={'settingsScreen'}>
                <Input name={'min value'} value={minValueLocal} setValue={setMinValueLocal} error={error}/>
                <Input name={'max value'} value={maxValueLocal} setValue={setMaxValueLocal} error={error}/>
            </div>
            <div className={'buttonWindow'}>
                <Button title={'set'} onClick={setButton} disabled={!!error}/>
            </div>
        </div>
    )
}

export default Settings;