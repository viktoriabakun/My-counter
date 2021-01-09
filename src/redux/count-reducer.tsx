import {
    countActionType,
    ERROR,
    INC,
    MAX_VALUE,
    RESET,
    SET_MAX_VALUE,
    SET_SCORE,
    SET_START_VALUE
} from "./count-actions";
import { Reducer } from 'redux';

let initState: StateType = {
    score: 0,
    startValue: 0,
    maxValue: 1,
    error: null,
}

export type PayloadType = {
    newError?: string | null,
    maxValue?: number,
}

export type ActionType ={
    type: string,
    payload: PayloadType
}

type StateType = {
    score: number,
    startValue: number,
    maxValue: number,
    error: string | null | undefined,
}

export const countReducer: Reducer<StateType, countActionType> = (state: StateType=initState, action: countActionType) => {
    switch (action.type){
        case INC: {
            return {...state, score: state.score + 1}
        }
        case RESET: {
            return {...state, score: state.startValue}
        }
        case MAX_VALUE: {
            return {...state, score: state.maxValue}
        }
        case ERROR: {
            return {
                ...state,
                error: action.payload.newError
            }
        }
        case SET_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        }
        case SET_START_VALUE: {
            return {
                ...state,
                startValue: action.payload.startValue
            }
        }
        case SET_SCORE: {
            return {
                ...state,
                score: action.payload.score
            }
        }

        default: {return state}
    }
}

