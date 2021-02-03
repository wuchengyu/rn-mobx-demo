import React from 'react';
import Home from './src/Home';

// imports Provider and store
import {Provider} from 'mobx-react';
import * as stores from './src/store';

const App = () => {
  return (
    <Provider {...stores}>
      <Home />
    </Provider>
  );
};

export default App;
