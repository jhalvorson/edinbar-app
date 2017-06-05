import React from 'react';
import { Route } from 'react-router-native';
import RenderView from './render-view';
import Wrapper from '../layouts/wrapper';
import { bool } from 'prop-types';

export default function Scene({view, authRequired, exact, ...rest}) {
  return (
    <Route
      exact={exact}
      {...rest}
      component={({ history, match }) => (
        <RenderView
          match={match}
          view={view}
          history={history}
          authRequired={authRequired}
        />
      )}
    />
  );
}

Scene.defaultProps = {
  authRequired: false,
  exact: true,
  layout: {
    component: Wrapper,
  },
};

Scene.propTypes = {
  authRequired: bool,
};
