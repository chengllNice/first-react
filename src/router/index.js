import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

// const Home = import('@/pages/home/home.jsx');
import home from "../pages/home/home";

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
        </Switch>
      </HashRouter>
    )
  }
}
