//routing page

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Exp from './exp';

//stateless, dont need class based so dont need to import Component

const Main = () => (
  <Switch>
    <Route path="/website" component = {LandingPage} />
    <Route path="/website/aboutme" component = {AboutMe} />
    <Route path="/website/exp" component = {Exp} />
  </Switch>
)


export default Main;
