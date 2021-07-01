import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Dialogs' activeClassName={s.activeLink}>Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item} >
            <NavLink to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
    </nav>
}

export default Nav;