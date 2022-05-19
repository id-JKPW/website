//routing page

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Exp from './exp';

//stateless, dont need class based so dont need to import Component

const Main = () => (
  <Switch>
    <Route exact path="/" component = {LandingPage} />
    <Route path="/aboutme" component = {AboutMe} />
    <Route path="/exp" component = {Exp} />
  </Switch>
)


export default Main;
