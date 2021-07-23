import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

const Profile = () => {

    return <div className={s.content}>
        <ProfileInfo />
        <MyPostsContainer />
    </div>
}

export default Profile;

