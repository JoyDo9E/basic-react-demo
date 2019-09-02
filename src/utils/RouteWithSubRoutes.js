/**
 * read me: 组件to路由组件转换器组件
 * Created by pengtao on 2019/8/23
 */
import React  from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class RouteWithSubRoutes extends React.Component {

  render () {
    const {
      route
    } = this.props;
    return (
      <Route
        path={route.path}
        exact={!!route.exact}
        render={props => {
          return !route.redirect ? <route.component
            {...props}
          /> : <Redirect to={route.redirect} />
        }}
      />
    )
  }
}