import React, { Component } from 'react';
import './App.css';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/user-reducer';
import Newuser from './components/Newuser.js';

const allReducers = combineReducers ({
    user: userReducer
});
const store = createStore(allReducers, 
    {
        user: {}
    },
    window.devToolsExtension && window.devToolsExtension()
);


class App extends Component{
  render() {
    return (
    <Provider store={store}>
        <div className="App wrapper">
            <Newuser />
        </div>
      </Provider>
    );
  }
}

export default App;