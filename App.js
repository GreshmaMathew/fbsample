import React, {Component} from 'react';
import Router from './src/components/router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  render() {
    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={state}>
        <Router />
      </Provider>
    );
  }
}

export default App;
