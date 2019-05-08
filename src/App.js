import React from 'react';

import GlobalStyles from '~/styles/global';

import Brand from '~/components/Brand';
import Main from '~/pages/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Brand />
        <Main />
      </div>
    </>
  );
}

export default App;
