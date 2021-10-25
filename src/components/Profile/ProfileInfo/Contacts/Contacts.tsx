import React from 'react';
import s from './contacts.module.css'

type PropsType = {
    contactTitle: string
    contactValue: string
}

const Contacts = (props: PropsType) => {
    return (
        <div className={s.contactPadding}>
            <b>{props.contactTitle} : {props.contactValue}</b>
        </div>
    );
};

export default Contacts;