import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import DeviceNav from '../device_nav/DeviceNav.component';
import classes from './Intro.module.scss';

const Intro = (props: { loading: boolean }) => {
  const [value, setValue] = useState(1000);

  useEffect(() => {
    setValue(2019);
  }, []);

  return (
    <div className={classNames(classes.contentContainer, { [classes.welcome]: !props.loading })}>
      <div className={classes.backgroundLogo}></div>
      <h2 className={classes.welcomeMesg}>Welcome to Apple</h2>
      <h2 className={classes.introMesg}>New Product Coming This Summer</h2>
      <div className={classes.products}>
        <p className={classes.productsMesg}>See our products</p>
        <DeviceNav />
      </div>
      <div className={classes.odometer}>
        <Odometer value={value} duration={2500} format="d" auto={false} />
      </div>
    </div>
  );
};

export default Intro;
