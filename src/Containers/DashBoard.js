import React from "react";
import { connect } from 'react-redux';

import dashBoardData from "../redux/actions/dashBoardData";


class EmployeeDetails extends React.Component {

    componentDidMount() {
        this.props.dispatch(dashBoardData());
    }

    render() {
        const { employeeList } = this.props;
        return (
            <React.Fragment>
        <h2 style={{ textAlign: "center" }}>Employee List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeList ? employeeList.user.map((employee) => {
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phoneNo}</td>
                                </tr>
                            );
                        }) : null}
                    </tbody>
                </table>

            </React.Fragment>
        )

    }
}


const mapStateToProps = state => ({ employeeList: state.empData.employeeList })

export default connect(mapStateToProps)(EmployeeDetails);
