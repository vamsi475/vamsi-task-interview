import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../redux/reducers/loginReducer";
import employeeDataReducer from "./reducers/employeeDataReducer";

export default () => {
    return (
        createStore(
            combineReducers({
                data: loginReducer,
                empData: employeeDataReducer
            }),
            applyMiddleware(thunk)
        )
    )
}