import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import LibraryListContainer from './src/components/LibraryList';


const App = () => (
  <Provider store={createStore(reducers)}>
    <Fragment>
      <Header headerText="Learn ReactJS" />
      <LibraryListContainer />
    </Fragment>
  </Provider>
);

export default App;

