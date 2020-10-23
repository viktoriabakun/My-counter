import React from 'react';
import './App.css';

export type ButtonProps = {
    title: string,
    onClick: () => void,
    disabled: boolean
}

function Button(props: ButtonProps) {
    return <button className='button'>
        {props.title}
    </button>
}

export default Button;
