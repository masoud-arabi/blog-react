import React from 'react';
import {Route} from 'react-router-dom';
import Dashboard from '../Dashboard';


const DashboardRoute = ()=>(
    // <Route exact path='/'>
    //     <Dashboard />
    // </Route>
    <Route exact path="/" component={Dashboard}/>
);

export default DashboardRoute;
