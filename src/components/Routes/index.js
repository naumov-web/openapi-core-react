import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Components
import IndexPage from '../pages/public/IndexPage';
import RegisterPage from '../pages/public/RegisterPage';
import NotFoundPage from '../pages/public/NotFoundPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/" component={IndexPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;