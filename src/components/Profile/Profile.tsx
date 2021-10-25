import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

type PropsType = {
    getUserProfile: (userID: number) => (profile: any) => void
    profile: any
    updateUserStatus: (status: string) => (profile: any) => void
    status: string
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}

const Profile = (props: PropsType) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateUserStatus={props.updateUserStatus}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
        />
        <MyPostsContainer/>
    </div>
}

export default Profile;

