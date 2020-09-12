import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Post from './Components/Post/Post';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/post/:id' component={Post}/>
    </Switch>
)