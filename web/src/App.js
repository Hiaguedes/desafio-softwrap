import React from 'react';
import './App.css';
import Routes from './routes';
import {BrowserRouter, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Routes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
