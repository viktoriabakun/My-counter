import React from 'react';
import './App.css';

export type ButtonProps = {
    title: string
    score?: number,
    onClick: () => void,
    disabled?: boolean
    maxValue?: number

}

function Button(props: ButtonProps) {
    return <button className={props.disabled ? 'disabled' : 'button'} onClick={props.onClick} disabled={props.disabled}>
        {props.title}
    </button>
}

export default Button;
