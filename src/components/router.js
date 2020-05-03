import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Map from './map.js'
import Panel from './panel.js'
import Forest from './Forest.js'
import SignIn from './LogIn.js'

const Router = function(){
    return(
    <Switch>
        <Route exact path= "/map" component = {Map}></Route>
        <Route exact path= "/panel" component = {Panel}></Route>
        <Route exact path='/' component={Forest}></Route>
        <Route exact path='/login'component={SignIn}></Route>
    </Switch>   
    )
}
    
export default Router