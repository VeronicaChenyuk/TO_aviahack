import React from 'react';
import {
 Route,
  Switch
} from 'react-router-dom';
import Main from '../scenes/Main';
import Louder from '../scenes/Louder';
import Estimate from '../scenes/Estimate';
import Settings from '../scenes/Settings';

export default () => (
  <Switch>
   
    <Route exact path="/">
      <Main />
    </Route>
    <Route path="/louder">
      <Louder />
    </Route>
      <Route path="/estimate">
        <Estimate />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      
  </Switch>
)
