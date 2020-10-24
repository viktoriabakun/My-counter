import React from 'react'
import Button from "./Button";
import './App.css'
import Input from "./Input";


type SettingsProps = {
    setButton: () => void
}

const Settings = (props: SettingsProps) => {
    return (
        <div className={'counter'}>
            <div className={'settingsScreen'}>
                <Input inputName={'min value'}/>
                <Input inputName={'max value'}/>
            </div>
            <div className={'buttonWindow'}>
                <Button title={'set'} onClick={props.setButton}/>
            </div>
        </div>
    )
}

export default Settings;