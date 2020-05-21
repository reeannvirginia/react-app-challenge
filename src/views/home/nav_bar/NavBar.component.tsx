import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { navItems } from '../../../utils/constants';
import { logoWhite } from '../../../assets/images';
import classes from './NavBar.module.scss';

type NavItem = {
  display: string;
  path: string;
  img: string;
};

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={classNames(classes.navBar, { [classes.showMenu]: menu })}>
      <div className={classes.logoBar}>
        <NavLink to={'/'}>
          <img src={logoWhite} alt="apple logo" />
        </NavLink>
      </div>
      <div className={classNames(classes.navContainer, { [classes.showMenu]: menu })}>
        <div className={classes.hamburger} onClick={() => setMenu((val) => !val)}>
          <div />
          <div />
        </div>
        <div className={classes.navItems}>
          {navItems.map(({ display, path }: NavItem) => {
            return (
              <NavLink key={display} onClick={() => setMenu(false)} className={classes.item} to={path}>
                {display}
              </NavLink>
            );
          })}
          <button className={classes.notifyBtn}>Notify me</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
