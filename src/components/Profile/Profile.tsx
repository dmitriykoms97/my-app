import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

type PropsType = {
    setUserProfile: (profile: any) => void
    profile: any
}

const Profile = (props: PropsType) => {

    return <div className={s.content}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}

export default Profile;

