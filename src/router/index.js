/**
 * read me: router组件
 * Created by pengtao on 2019/8/15
 */
import React, { Component, lazy  } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const partA = lazy(() => import('../components/partA'));
const partB = lazy(() => import('../components/partB'));
const partC = lazy(() => import('../components/partC'));

export default class RouterComponent extends Component {

  state = {

  };

  render () {
    return (
      <Router>
        <Switch>
          <Route path={'/partA'} component={partA} />
          <Route path={'/partB'} component={partB} />
          <Route path={'/partC'} component={partC} />
        </Switch>
      </Router>
    )
  }
}