import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {dialogsPropsType, messagePropsType} from "../../redux/dialogs-reducer";
import {DialogPageType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {Textarea} from "../common/preloader/formsControl/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


type PropsType = {
    dialogsPage: DialogPageType
    sendMessage: (newMessageText: string) => void
    isAuth: boolean
}

type AddMessagePropsType = {
    sendMessage: (newMessageText: string) => void
    onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    newMessageText: string
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((d: dialogsPropsType) =>
        <DialogsItem id={d.id}
                     key={d.id}
                     name={d.name}
                     avatar={d.avatar}/>)

    let messagesElements = props.dialogsPage.messageData.map((m: messagePropsType) =>
        <Message id={m.id}
                 key={m.id}
                 message={m.message}
                 avatar={m.avatar}/>)

    let addNewMessage = (data: AddMessagePropsType) => {
        props.sendMessage(data.newMessageText)
    }

    if(props.isAuth) return <Redirect to={'login'} />

    return (
        <div>
            <div className={s.globalDialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<AddMessagePropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputMessageBlock}>
                <Field placeholder='Enter your message'
                       className={s.inputMessage}
                       name={'newMessageText'}
                       component={Textarea}
                       validate={[requiredField, maxLength100]}
                />
                <button className={s.sendMessage}>SEND</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessagePropsType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;


