import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../components/Form'
import DisplayList from '../components/DisplayList';

const Header = () => (
    <Switch>
        <Route exact path='/' component={Form} />
        <Route path='/table' component={DisplayList} />
    </Switch>
)

export default Header;