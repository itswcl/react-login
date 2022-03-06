import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Main from './Components/Main';
// practice useContext import useContext 03052022
import React from 'react'

function App() {

  return (
    <div className="container">
      <Switch>
        {/* login route */}
        <Route path="/login">
          <Login />
        </Route>
        {/* register route */}
        <Route path="/register">
          <Register />
        </Route>
      </Switch>

      <Main />
    </div>
  );
}
export default App;
