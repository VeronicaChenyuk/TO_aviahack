import React from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Main from '../scenes/Main';
import Louder from '../scenes/Louder';
import Estimate from '../scenes/Settings';
import Settings from '../scenes/Settings';

export default () => (
  <Switch>
    <Route exact path="/">
      <Main />
    </Route>
    <Route path="/louder">
      <Louder />
      <Route path="/estimate">
        <Estimate />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </Route>
  </Switch>
)
