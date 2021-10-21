import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type PropsType = {
    isAuth: boolean
    login: string
    authLogoutTC: () => (dispatch: any) => void
}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        <img
            src={'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login}  <button onClick={props.authLogoutTC}>LogOUT</button></div>
                : <NavLink to={'/login'}>
                    Login
                </NavLink>}

        </div>
    </header>
}

export default Header;