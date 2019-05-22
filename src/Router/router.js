import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LogInPage from "../Containers/Login";
import DashBoard from "../Containers/DashBoard";

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" component={LogInPage} exact={true}/>
                    <Route path="/dashboard" component={DashBoard} />
               </BrowserRouter>
            </div>
        )
    }
}
