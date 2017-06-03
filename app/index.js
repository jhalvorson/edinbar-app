import React from 'react';
import MapView from './views/map';
import { Provider } from 'mobx-react';
import stores from './stores';

export default function App() {
  return (
    <Provider {...stores}>
      <MapView />
    </Provider>
  );
}
