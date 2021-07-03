import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
  

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar></NavBar>

            <Switch>
                <Route path ="/about" component={AboutScreen}></Route>
                <Route path ="/login" component={LoginScreen}></Route>
                <Route path ="/" component={HomeScreen}></Route>
                <Redirect to ='/'></Redirect>
            </Switch>


            </div>
        </Router>
    )
}
