import React, {Component} from 'react';
import {messagePropsType} from '../../../redux/state';
import s from './../Dialogs.module.css';


const Message = (props: messagePropsType) => {
    return <div className={s.containerMessage}>
        <div className={s.messageItem}>
            <div className={s.imgBlock}><img className={s.avatarMessages} src={props.avatar} alt=''/></div>
            <div className={s.messageBlock}>{props.message}</div>
        </div>
    </div>
}

export default Message;