import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RouterComponent from './router/index';
// import LoadIcon from './assets/img/account-loading.gif';

ReactDOM.render(
  <App>
    {/*<Suspense fallback={<div className={styles.loadWrapper}><LoadIcon /></div>}>*/}
    <Suspense fallback={<div className={styles.loadWrapper}></div>}>
      <RouterComponent />
    </Suspense>
  </App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
