import React, {Component} from 'react';
import {HashRouter, Route, Switch, IndexRoute} from 'react-router-dom';

// const Home = import('@/pages/home/home.jsx');
import homePage from "../pages/main-content/home-page/home-page";
import login from "../pages/login/login";

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={login} />
          <Route path="/homePage" component={homePage} />
        </Switch>
      </HashRouter>
    )
  }
}
