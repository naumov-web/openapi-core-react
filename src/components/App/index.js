import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../../store/reducers';

import Routes from '../Routes';

import "../../styles/main.styl";
import RoutesWrapper from '../Routes/RoutesWrapper';

const store = createStore(combineReducers(reducers));

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <RoutesWrapper>
          <Routes />
        </RoutesWrapper>
      </Provider>
    </div>
  );
};

export default App;