import loginData from "../data/loginData.json"

const initialState = {
    userName: loginData.username,
    password: loginData.password,
    auth: false,
    errorMsg: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            if ((state.userName === action.payload.email) && (state.password === action.payload.password)) {
                return {
                    ...state,
                    auth: true
                }
            } else {
                return {
                    ...state,
                    auth: false,
                    errorMsg: "Please enter valid Username and Password"
                }
            }
        default:
            return state
    }

}

