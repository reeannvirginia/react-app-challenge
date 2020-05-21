import React from 'react';
import classes from './Devices.module.scss';

// future to do

const MacBook = () => {
  return (
    <div className={classes.macBookContainer}>
      <div className={classes.macBookFeature}>
        <h4 className={classes.deviceTitle}>MacBook Pro</h4>
        <h1 className={classes.preview}>Coming soon in 2020</h1>
      </div>
    </div>
  );
};

export default MacBook;
