import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import About from "./Components/About";
import User from "./Components/User";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* This is an example of using a function as a route */}

        {/* <Route path="/about" exact render={
          () => {
            return <h1> Hello </h1>
          }
        } /> */}

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/user/:username" exact component={User} />

      </div>
    </Router>
  );
}

export default App;
