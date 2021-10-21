import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

type PropsType = {
    getUserProfile: (userID: number) => (profile: any) => void
    profile: any
    updateUserStatus: (status: string) => (profile: any) => void
    status: string
}

const Profile = (props: PropsType) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;

