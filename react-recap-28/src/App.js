import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/layouts/About';
import Register from './components/auth/Register';
import './App.css';

import NavBar from './components/layouts/NavBar';
import NotFound from './components/layouts/NotFound';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
