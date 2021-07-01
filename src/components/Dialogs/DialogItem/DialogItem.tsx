import React from 'react';
import {NavLink} from 'react-router-dom';
import { dialogsPropsType } from '../../../redux/state';
import s from './../Dialogs.module.css';

const DialogsItem = (props: dialogsPropsType) => {
    return <div className={s.item + ' ' + s.activeItem}>
        <div className={s.container}>
            <span><img className={s.avatarDialogs} src={props.avatar} alt=''/></span>
            <NavLink className={s.nameOfSender} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    </div>
}

export default DialogsItem;