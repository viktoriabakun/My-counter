import React, {ChangeEvent} from 'react'

type InputProps = {
    name: string
    value: number
    setValue: (value:number) => void
}

const Input = (props: InputProps) => {
    const {name, setValue, value} = props
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = +e.currentTarget.value
        setValue(inputValue)
    }

    return (
        <div className={'inputItem'}>
            <span>{props.name}</span>
            <input type="number"
                   className={'inputSet'}
                   min='-1'
                   onChange={onChangeHandler}
            />

        </div>

    )
}

export default Input;