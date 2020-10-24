import React from 'react'
import Button from "./Button";
import './App.css'


type SettingsProps = {
    setButton: () => void
}

const Settings = (props: SettingsProps) => {
    return (
        <div className={'counter'}>
            <div className={'settingsScreen'}>
                <input className={'inputSet'} type="text"/>
                <input className={'inputSet'} type="text"/>
            </div>
            <div className={'buttonWindow'}>
                <Button title={'set'} onClick={props.setButton}/>
            </div>
        </div>
    )
}

export default Settings;