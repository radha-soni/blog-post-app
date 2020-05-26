import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Post from "./components/Post";
import "./App.css";
import HomePage from "./components/HomePage";
import NewPost from "./components/NewPost";

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="links-container">
          <li>
            <NavLink activeClassName="link-active" to="/posts">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/new-post">
              New Post
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/posts">
            <Post />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
