import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import IndexPage from '../pages/public/IndexPage';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';
import ProfilePage from '../pages/account/ProfilePage';
import LogoutPage from '../pages/account/LogoutPage';
import NotFoundPage from '../pages/public/NotFoundPage';
import Menu from '../Menu';

const Routes = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/account" component={ProfilePage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default Routes;