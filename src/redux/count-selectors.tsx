import {RootStateRedux} from "./redux-store";

export const getScore = (store: RootStateRedux):number => {
    return store.counter.score;
}

export const getMaxValue = (store: RootStateRedux):number => {
    return store.counter.maxValue;
}

export const getError = (store: RootStateRedux): string | null | undefined => {
    return store.counter.error;
}

export const getStartValue = (store: RootStateRedux): number => {
    return store.counter.startValue;
}
