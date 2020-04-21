import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Map from './map.js'
import Panel from './panel.js'

const Router = function(){
    return(
    <Switch>
        <Route exact path= "/map" component = {Map}></Route>
        <Route exact path= "/panel" component = {Panel}></Route>
    </Switch>   
    )
}
    
export default Router;