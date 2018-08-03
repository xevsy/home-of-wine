import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import FrontPage from '../components/FrontPage'
import AddItem from '../components/AddItem';
import UserProfile from '../components/UserProfile';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={"/"} component={FrontPage} exact={true} />
        <Route path={"/create"} component={AddItem} />
        <Route path={"/profile"} component={UserProfile} />
        <Route path={"/login"} component={LoginPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;