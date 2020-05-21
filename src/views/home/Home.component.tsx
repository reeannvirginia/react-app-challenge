import React from 'react';
import { Switch, Route, useRouteMatch, useLocation, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Intro, IPhone, Watch, MacBook, NavBar } from './index';
import classes from './Home.module.scss';

type ShipDates = {
  iphone: string;
  macbook: string;
  watch: string;
};

type HomeProps = {
  loading: boolean;
  dates: ShipDates | null;
};

const Home = ({ loading, dates }: HomeProps) => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <CSSTransition classNames="scaleBack" appear in={loading} timeout={{ appear: 500, enter: 100, exit: 100 }}>
      <div className={classes.homeContainer}>
        <NavBar />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 400, exit: 400 }}
            classNames={loading ? undefined : 'newPage'}
          >
            <Switch location={location}>
              <Route path={match.path} exact render={() => <Intro loading={loading} />} />
              <Route path={`${match.path}/iphone`} exact render={() => <IPhone date={dates?.iphone || ''} />} />
              <Route path={`${match.path}/macbook-pro`} exact render={() => <MacBook />} />
              <Route path={`${match.path}/watch`} exact render={() => <Watch date={dates?.watch || ''} />} />
              <Redirect to={'/home'} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </CSSTransition>
  );
};

export default Home;
