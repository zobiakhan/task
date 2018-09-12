import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import inputForm from "./comp/inputForm";
import displayForm from "./comp/displayForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>

          <div>

            <ul>
              <li>
                <Link to="/inputform">Input Form to Fill</Link>
              </li>
              <li>
                <Link to="/displayform">display Form</Link>
              </li>
            </ul>
            <hr />
            <Route path="/inputForm" component={inputForm} />
            <Route path="/displayForm" component={displayForm} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
