import React from 'react';
import Test from './components/test';
import { Provider } from 'mobx-react';
import stores from './stores';

export default function App() {
  return (
    <Provider {...stores}>
      <Test text={'This is a test'} />
    </Provider>
  );
}
