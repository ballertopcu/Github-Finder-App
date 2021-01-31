import React from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import Alert from './Alert'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import About from './About'
import UserDetails from './UserDetails'
import GithubState from '../context/github/githubState'
import AlertState from '../context/alert/alertState'
import NotFound from './NotFound'
import Home from './Home'



const App = ()=> {

        return (
            <GithubState>
                <AlertState>
                    <BrowserRouter>
                            <Navbar/>
                            <Alert/>
                            <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/user/:login" component={UserDetails}/>
                            <Route component={NotFound}/>
                            </Switch>
                        </BrowserRouter>
                    </AlertState>
                </GithubState>
        )  
         
                   

    
}

export default App
