import React, { Component } from 'react';
import { connect } from "react-redux";
import loginAction from "../redux/actions/loginAction"

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    }
    onChange = (event) => this.setState({ [event.target.name]: event.target.value });
    onSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "please enter the fields" });
        } else {
            const regax = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regax.test(email)) {
                this.setState({ error: "" });
                this.props.dispatch(loginAction({ email, password }));

            } else {
                this.setState({ error: "Enter valid formate of email" });
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            error: nextProps.errorMsg
        })
    }
    render() {
        const { email, password, error } = this.state;
        const { auth, history } = this.props
        if (auth) {
            history.push("/dashboard");
        }
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="card card-body">
                                <h3 className="text-center ">Sign In</h3>
                                {error && <p className="text-danger mt-3 mb-2 text-center">{error}</p>}
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label className="font-weight-bold small">Email address:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter the email"
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold small">Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="password"
                                            name="password"
                                            value={password}
                                            onChange={this.onChange}
                                            autoComplete=''
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-block">SignIn</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.data.auth,
    errorMsg: state.data.errorMsg
})

export default connect(mapStateToProps)(Login);
