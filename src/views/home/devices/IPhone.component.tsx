import React, { useState, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { iphoneFrontLarge, iphoneBackLarge, iphoneBackSmall, iphoneFrontSmall, logoGrey } from '../../../assets/images';
import { DeviceNav } from '../index';
import { formatDate } from '../../../utils/helper';
import classes from './Devices.module.scss';

const IPhone = (props: { date: string }) => {
  // useMemo to avoid recalculating date on re-renders unless props.date changes
  const shipDate = useMemo(() => formatDate(props.date), [props.date]);
  const [position, setPosition] = useState(0);

  // scroll position will dictate the thumbnail opacity and
  // image preview positions
  const onScroll = (e: any) => {
    setPosition(e.target.scrollLeft);
  };

  return (
    <CSSTransition classNames="newDevice" appear in={true} timeout={400}>
      <div className={classes.deviceContainer}>
        <div className={classes.deviceBanner}>
          <h4 className={classes.title}>iPhone</h4>
          <h1 className={classes.header}>
            The ultimate <br />
            iPhone
          </h1>
          <img className={classes.logo} src={logoGrey} alt="grey apple logo" />
          <p className={classes.caption}>
            The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!
          </p>
          {props.date && <p className={classes.shipDate}>Starts shipping {shipDate}</p>}
        </div>

        <div className={classes.priceDetails}>
          <div className={classes.price}>
            <h3>From $699</h3>
            <a
              className={classes.buyNow}
              href="https://www.apple.com/shop/buy-iphone/iphone-11-pro"
              target="blank"
              rel="noopener noreferrer"
            >
              Buy now <span> > </span>
            </a>
          </div>
        </div>
        <div className={classes.devicePreview}>
          <div className={classes.iphoneWrapper}>
            <img
              style={{ transform: `translateX(${position}%`, opacity: 1 - position / 200 }}
              className={classes.phoneImage}
              src={iphoneFrontLarge}
              alt="iphone face"
            />
            <img
              style={{ transform: `translateX(${200 - position}%`, opacity: (position * 1) / 200 }}
              className={classes.phoneImage}
              src={iphoneBackLarge}
              alt="iphone back"
            />
          </div>
          <DeviceNav vertical />
          <div className={classes.thumbnailPreview}>
            <div className={classes.thumbnails}>
              <img
                style={{ opacity: 1 - position / 200 + 0.2 }}
                src={iphoneFrontSmall}
                alt="iphone front thumbnail"
                onClick={() => setPosition(0)}
              />
              <img
                style={{ opacity: (position * 1) / 200 + 0.2 }}
                src={iphoneBackSmall}
                alt="iphone small thumbnail"
                onClick={() => setPosition(200)}
              />
            </div>
            <div className={classes.scrollbar}>
              <div className={classes.slider} onScroll={onScroll}>
                <div className={classes.slide} />
                <div className={classes.slide} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default IPhone;
