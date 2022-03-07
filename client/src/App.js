import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Main from './Components/Main';
// practice useContext import useContext 03052022
import React, { useState } from 'react'
import { themes, ThemeContext } from "./Context/ThemeContext";

function App() {
  // set style in Main
  const [theme, setTheme] = useState(themes.light)

  return (
    <div className="container" style={theme}>
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
      {/* pass over the theme and setTheme along */}
      {/* we pass context from App.js and all the children having the access to ThemeContext */}
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Main />
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
