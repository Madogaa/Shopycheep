import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

const RouteView = ({ routes }) => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
)

RouteView.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      component: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};

export default RouteView;