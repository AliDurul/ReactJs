import {createStore} from "redux"
import { counterReducer } from "./countReducer"

export const store = createStore(counterReducer)
