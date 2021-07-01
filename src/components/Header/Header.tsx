import React, {Component} from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img
            src={'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'}/>
    </header>
}

export default Header;