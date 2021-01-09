import {combineReducers, createStore, Store} from "redux";
import {countReducer} from "./count-reducer";

let reducers = combineReducers(
    {
        counter: countReducer,
    }
);

export type RootStateRedux = ReturnType<typeof reducers>
let store: Store = createStore(reducers);

export default store;