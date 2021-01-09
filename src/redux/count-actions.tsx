import {PayloadType} from "./count-reducer";

export const INC =  'inc';
export const RESET = 'reset';
export const MAX_VALUE = 'maxValue'
export const ERROR = 'error'
export const SET_MAX_VALUE = 'setMaxValue'
export const SET_START_VALUE = 'setStartValue'
export const SET_SCORE = 'setScore'

export type incType = {
    type: typeof INC
}

export type resetType  = {
    type: typeof RESET
}

export type maxValueType = {
    type: typeof MAX_VALUE,
}

export type setMaxValueType = {
    type: typeof SET_MAX_VALUE,
    payload: {
        maxValue: number
    }
}

export type setErrorType = {
    type: typeof ERROR,
    payload: {
        newError: string | null
    }
}

export type setStartValueType = {
    type: typeof SET_START_VALUE,
    payload: {
        startValue: number
    }
}
export type setScoreType = {
    type: typeof SET_SCORE,
    payload: {
        score: number
    }
}





export type countActionType = incType | resetType | maxValueType | setMaxValueType | setErrorType |  setStartValueType | setScoreType ;

export const setError = (error: string | null): setErrorType => {
    return{
        type: ERROR,
        payload: {
            newError: error
        }
    }
}

export const setMaxValue = (maxValue: number): setMaxValueType => {
    return{
        type: SET_MAX_VALUE,
        payload: {
          maxValue
        }
    }
}

export const setStartValue = (startValue: number): setStartValueType => {
    return{
        type: SET_START_VALUE,
        payload: {
            startValue
        }
    }
}

export const setScore = (score: number): setScoreType => {
    return{
        type: SET_SCORE,
        payload: {
            score
        }
    }
}