import React, {useCallback, useEffect, useState} from 'react'
import Button from "./Button";
import './App.css'
import Input from "./Input";


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

    const { error, maxValue, startValue, setError, setMaxValue, setStartValue, setScore, score } = props

    const [minValueLocal, setMinValueLocal] = useState<number>(0);
    const [maxValueLocal, setMaxValueLocal] = useState<number>(maxValue);

    const isError = useCallback(() => {
        if (minValueLocal < 0) {
            setError('min не может быть меньше 0')
        } else if (minValueLocal === maxValueLocal) {
            setError('min не может быть равен max')
        } else if (minValueLocal > maxValueLocal) {
            setError('min не может быть больше max')
        } else {
            setError('')
        }
    }, [minValueLocal, maxValueLocal, setError])

    useEffect(() => {
        isError()
    }, [minValueLocal, maxValueLocal, isError])


    const setButton = () => {
        setStartValue(minValueLocal)
        setMaxValue(maxValueLocal)
        setScore(minValueLocal)
    }

    return (
        <div className={'counter'}>
            <div className={'settingsScreen'}>
                <Input name={'min value'} value={minValueLocal} setValue={setMinValueLocal} error={error}/>
                <Input name={'max value'} value={maxValueLocal} setValue={setMaxValueLocal} error={error}/>
            </div>
            <div className={'buttonWindow'}>
                <Button title={'set'} onClick={setButton}/>
            </div>
        </div>
    )
}

export default Settings;