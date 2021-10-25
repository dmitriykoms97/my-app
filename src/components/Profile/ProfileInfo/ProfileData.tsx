import React from 'react';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Contacts from "./Contacts/Contacts";

type PropsType = {
    profile: any
    status: string
    updateUserStatus: (status: string) => (profile: any) => void
    isOwner: boolean
    goToEditMode: any
}



const ProfileData = (props: PropsType) => {
    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Status: </b><ProfileStatusWithHooks status={props.status}
                                                   updateUserStatus={props.updateUserStatus}/>
        </div>
        <div>
            <b>Full name: </b>{props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>My skills: </b>{props.profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me: </b>{props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}

export default ProfileData;