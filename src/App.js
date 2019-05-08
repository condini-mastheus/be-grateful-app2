import React from 'react';

import { Provider } from 'react-redux';

import GlobalStyles from '~/styles/global';

import store from './store';

import Brand from '~/components/Brand';
import Main from '~/pages/Main';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div className="App">
        <Brand />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
