import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter as Router} from 'react-router-dom';
import routers from '@/router/index';
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes';
import './App.css';
import styles from "./index.css";
import IconComponent from '@/assets/img/svg-sprite-icons/account-loading.gif'
import SvgIcon from '@/utils/svgIconGenerator'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div className={styles.loadWrapper}><SvgIcon component={IconComponent} style={{width: '36px', height: '36px'}} /></div>}>
          <Router>
            <Switch>
              {
                routers.map((route, index) => (
                  <RouteWithSubRoutes
                    key={index}
                    {...route}
                    route={route}
                  />
                ))
              }
            </Switch>
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default App;
