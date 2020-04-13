import React, {Component} from 'react';
import Router from './src/navigation/router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

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
