import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './components/Homepage.js';
import Userpage from './components/Userpage';
import Reception from './components/Reception/Reception';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/user/:userid" component={Userpage}/>
          <Route exact path="/reception" component={Reception}/>
          <Route exact path="/" component={Homepage}/>
          
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
