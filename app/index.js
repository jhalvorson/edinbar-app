import React from 'react';
import MapView from './views/map';
import { Provider } from 'mobx-react';
import Routes from './routes';
import stores from './stores';

export default function App() {
  return (
    <Provider {...stores}>
      <Routes />
    </Provider>
  );
}
