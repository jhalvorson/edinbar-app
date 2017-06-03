import React from 'react';
import { Route } from 'react-router-native';
import RenderView from './render-view';
import Wrapper from '../layouts/wrapper';

export default function Scene({view, exact, ...rest}) {
  return (
    <Route
      exact={exact}
      {...rest}
      component={({ history }) => (
        <RenderView
          view={view}
          history={history}
        />
      )}
    />
);
}
