import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { logoGrey, watchWhite, watchBlack } from '../../../assets/images';
import { formatDate } from '../../../utils/helper';
import { DeviceNav } from '../index';
import classes from './Devices.module.scss';

const Watch = (props: { date: string }) => {
  const shipDate = useMemo(() => formatDate(props.date), [props.date]);
  const [whiteBand, setBand] = useState(true);

  return (
    <CSSTransition classNames="newDevice" appear in timeout={400}>
      <div className={classes.deviceContainer}>
        <div className={classes.deviceBanner}>
          <h4 className={classes.title}>Apple Watch</h4>
          <h1 className={classes.header}>Change starts within.</h1>
          <img className={classes.logo} src={logoGrey} alt="grey apple logo" />
          <p className={classes.caption}>
            Apple Watch Series 4. Fundamentally redesigned and re‑engineered to help you be even more active, healthy,
            and connected.
          </p>
          <p className={classes.shipDate}>Starts shipping {shipDate}</p>
        </div>
        <div className={classes.priceDetails}>
          <div className={classes.price}>
            <h3>From $699</h3>
            <a
              className={classes.buyNow}
              href="https://www.apple.com/shop/buy-watch/apple-watch"
              target="blank"
              rel="noopener noreferrer"
            >
              Buy now <span> > </span>
            </a>
          </div>
        </div>
        <div className={classes.watchPreview}>
          <div className={classes.watchWrapper}>
            <img className={classes.watchImage} src={whiteBand ? watchWhite : watchBlack} alt="apple watch" />
            <div className={classes.radioBtns}>
              <div
                className={classNames(classes.radio, { [classes.selected]: whiteBand })}
                onClick={() => setBand(true)}
              >
                <div className={classes.check}>
                  <div className={classes.circle} />
                </div>
                <label htmlFor="white">White</label>
              </div>
              <div
                className={classNames(classes.radio, { [classes.selected]: !whiteBand })}
                onClick={() => setBand(false)}
              >
                <div className={classes.check}>
                  <div className={classes.circle} />
                </div>
                <label htmlFor="black">Black</label>
              </div>
            </div>
          </div>
          <DeviceNav vertical />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Watch;
