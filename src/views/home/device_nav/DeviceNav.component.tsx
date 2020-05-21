import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { navItems } from '../../../utils/constants';
import classes from './DeviceNav.module.scss';

const DeviceNav = (props: { vertical?: boolean }) => {
  return (
    <div className={classNames(classes.navIcons, { [classes.verticalNav]: props.vertical })}>
      {navItems.map(({ display, path, img }) => {
        return (
          <NavLink key={display} className={classes.item} to={path}>
            <img src={img} alt={display} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default DeviceNav;
