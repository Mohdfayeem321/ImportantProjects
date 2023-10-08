/** @format */

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutUsPage from "../AboutUs/AboutUsPage";

const Routes = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/homepage" component={HomePage} />
        <Route path="/about" component={AboutUsPage} />
      </Router>
    </>
  );
};

export default Routes;
