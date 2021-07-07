import React from 'react'

import { BrowserRouter as Router,Switch, Route,} from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
// import { Navbar } from '../components/ui/NavBar'


export const AppRouter = () => {
    return (
       
        <Router>
        <div>
            {/* <Navbar></Navbar> */}


          <Switch>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/' component={ DashboardRoutes }/>
            
          </Switch>
        </div>
      </Router>
    )
}
