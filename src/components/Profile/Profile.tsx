import React, {Component} from 'react';
import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postPageType} from "../../redux/state";

type profilePropsType = {
    profilePage: postPageType
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

const Profile = (props: profilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo />
        <MyPosts state={props.profilePage}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profile;

