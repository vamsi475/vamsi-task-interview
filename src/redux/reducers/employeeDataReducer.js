import employeeData from "../data/employeeData.json"

const initialState = {
    employeeList : null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_EMPLOYEE_DATA":
            return {
                employeeList : employeeData
            }
        default:
            return state
    }

}
