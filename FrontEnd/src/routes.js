import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Login from './pages/login';
import DashBoard from './pages/dashBord';
import New from './pages/New';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Login}/>
                <Route path = "/dashboard" component = {DashBoard}/>
                <Route path = "/new" component = {New}/>
            </Switch>
        </BrowserRouter>
    )
}
