import React, {Component} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";

type PropsType = {
    profile: any
}

const ProfileInfo = (props: PropsType) => {

    if(!props.profile) {
        return <Preloader />
    }

    return <div>
        <div className={s.backImg}>
            <img src='https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava + description
        </div>
    </div>
}

export default ProfileInfo;

