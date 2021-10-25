import React, {ChangeEvent, Props, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import userUnknownPhoto from "../../../assets/img/user.png";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

type PropsType = {
    profile: any
    updateUserStatus: (status: string) => (profile: any) => void
    status: string
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}

const ProfileInfo = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        if (e.target.files.length) {
            //@ts-ignore
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return <div>
        <div className={s.descriptionBlock}>
            <div className={s.avatarAndProfileInfoBlock}>
                <div>
                    <img src={props.profile.photos.large || userUnknownPhoto} className={s.avatar}/>
                    <div>
                        {!props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    </div>
                </div>
                {editMode ?
                    //@ts-ignore
                    <ProfileDataForm profile={props.profile}
                                     status={props.status}
                                     updateUserStatus={props.updateUserStatus}
                                     onSubmit={onSubmit}
                                     initialValues={props.profile}
                    /> : <ProfileData profile={props.profile}
                                      status={props.status}
                                      updateUserStatus={props.updateUserStatus}
                                      isOwner={props.isOwner}
                                      goToEditMode={() => {
                                          setEditMode(true)
                                      }}
                    />}

            </div>
        </div>
    </div>
}

export default ProfileInfo;

