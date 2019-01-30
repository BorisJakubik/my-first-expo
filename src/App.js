import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryListContainer from './components/LibraryList';


const App = () => (
  <Provider store={createStore(reducers)}>
    <Fragment>
      <Header headerText="Learn ReactJS" />
      <LibraryListContainer />
    </Fragment>
  </Provider>
);

export default App;
