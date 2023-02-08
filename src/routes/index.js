import { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import _ from "lodash";
import history from "./history";
import BookingPage from "../layouts/BookingPage";
import HomePage from "../layouts/HomePage";
import LandingPage from "../layouts/LandingPage";
import Error404 from "../utils/Error404";
import { getSessionToken } from "../utils/session";

class Routes extends Component {
  render() {
    if (window.location.pathname === "/") {
      if (_.isEmpty(getSessionToken("session-id")) === false) {
        history.push("/home");
      }
    }

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/booking" component={BookingPage} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
