import React from 'react';
import {createField, Input, Textarea} from "../../common/preloader/formsControl/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {LoginRequestDataType} from "../../../redux/auth-reducer";
import s from './Contacts/contacts.module.css'

type PropsType = {
    profile: any
    status: string
    updateUserStatus: (status: string) => (profile: any) => void
}

type ProfileDataFormType = PropsType & InjectedFormProps<LoginRequestDataType>

const ProfileDataForm = (props: ProfileDataFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {props.error && <div className={s.errorMessages}>
                {props.error}
            </div>}
            <div>
                <b>Full name: </b>{createField('Full Name', 'fullName', Input, [])}
            </div>
            <div>
                <b>Looking for a job: </b>{createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
            </div>
            <div>
                <b>Professional Skills: </b>{createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}
            </div>
            <div>
                <b>About me: </b>{createField('about me', 'aboutMe', Textarea, [])}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: </b>{createField(key, 'contacts.' + key, Input, [])}
                </div> })}

            </div>
        </form>
    );
};
//@ts-ignore
const ProfileDataFormReduxForm = reduxForm<any>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;