import React, {useState} from 'react'
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


    const setButton = () => {
        setStartValue(minValueLocal)
        setMaxValue(maxValueLocal)
        setScore(minValueLocal)
    }

    return (
        <div className={'counter'}>
            <div className={'settingsScreen'}>
                <Input name={'min value'} value={minValueLocal} setValue={setMinValueLocal}/>
                <Input name={'max value'} value={maxValueLocal} setValue={setMaxValueLocal}/>
            </div>
            <div className={'buttonWindow'}>
                <Button title={'set'} onClick={setButton}/>
            </div>
        </div>
    )
}

export default Settings;