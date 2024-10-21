import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { restReducer } from "../reducers/restReducer";



//reducer
const reducer=combineReducers({
    restaurentReducer:restReducer

})

//middleware
const middleware=[thunk]


//create store
const store=createStore(reducer, applyMiddleware(...middleware))




export default store