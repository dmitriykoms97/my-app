import React, {Component} from 'react';
import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postPageType} from "../../redux/state";

type profilePropsType = {
    profilePage: postPageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const Profile = (props: profilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo />
        <MyPosts state={props.profilePage}
                 newPostText={props.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;

