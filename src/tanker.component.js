import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Route } from "react-router";
import {
  ConnectedRouter as Router,
  routerMiddleware,
  push
} from "react-router-redux";

import * as reducers from "./tanker.reducer";
import Layout from "./layout/layout.component";

export class Tanker extends Component {
  constructor(props, context) {
    super(props, context);

    this.history = createHistory();
    this.store = createStore(
      combineReducers(reducers),
      applyMiddleware(routerMiddleware(history))
    );

    push("/");
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router history={this.history}>
          <div>
            <Route path="/" component={Layout} />
          </div>
        </Router>
      </Provider>
    );
  }
}
