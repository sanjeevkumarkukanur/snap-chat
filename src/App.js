import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Priview from './Priview';
import Chats from './Chats';

function App() {
  return (
    <div className="app">
      <Router>
      <div className="app__body">
        <Switch>
        <Route exact path="/chats">
            <Chats />
          </Route>
        <Route exact path="/preview">
            <Priview />
          </Route>
          <Route exact path="/">
            <WebcamCapture />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
