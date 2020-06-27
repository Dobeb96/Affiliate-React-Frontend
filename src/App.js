import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.scss"

export default function App() {
  return (
    <Router>
      <div>
        <nav class="nav">
          <Link to="/" className="logo">domicillo</Link>
          <ul class="nav-links">
            <li>
              <Link to="/lampy-sufitowe">Lampy sufitowe</Link>
            </li>
            <li>
              <Link to="/lampy-wiszace">Lampy wiszące</Link>
            </li>
            <li>
              <Link to="/klinkiety">Klinkiety</Link>
            </li>
            <li>
              <Link to="/lampy-stojace">Lampy stojące</Link>
            </li>
            <li>
              <Link to="/oswietlenie-zewnetrzne">Oświetlenie zewnętrzne</Link>
            </li>
          </ul>
          <div>{/* Empty div for easier flexbox positioning */}</div>
        </nav>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
