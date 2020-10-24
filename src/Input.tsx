import React from 'react'

type InputProps = {
    inputName: string
}

const Input = (props: InputProps) => {
    return (
        <div className={'inputItem'}>
            <span>{props.inputName}</span>
            <input type="number"
                   className={'inputSet'}
                   min='-1'

            />

        </div>

    )
}

export default Input;