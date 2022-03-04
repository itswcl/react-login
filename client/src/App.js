import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';

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
