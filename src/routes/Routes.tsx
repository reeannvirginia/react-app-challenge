import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Login, Homepage } from '../views/index';

// checking to see if the user is authenticated or has an open session before redirecting
// to the authorized app
const AppRoutes = () => {
  const { authenticated } = useContext(UserContext)!;
  return <Switch>{authenticated ? <ProtectedApp /> : <PublicApp />}</Switch>;
};

const PublicApp = () => {
  return (
    <>
      <Route path={'/login'} exact component={Login} />
      <Redirect to={'/login'} />
    </>
  );
};

const ProtectedApp = () => {
  return (
    <>
      <Route key="home" path={'/home'} component={Homepage} />
      <Route key="redirect" path={'/'} exact render={() => <Redirect to={'/home'} />} />
      <Redirect to={'/'} />
    </>
  );
};

export default AppRoutes;
