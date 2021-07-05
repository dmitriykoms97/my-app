import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {
    ActionsTypes, addMessageActionCreator,
    addPostActionCreator,
    dialogPageType,
    dialogsPropsType,
    messagePropsType, updateNewMessageTextActionCreator, updateNewPostTextActionCreator
} from '../../redux/state';


type PropsType = {
    state: dialogPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.state.dialogsData.map((d: dialogsPropsType) => <DialogsItem id={d.id} name={d.name}
                                                                                            avatar={d.avatar}/>)

    let messagesElements = props.state.messageData.map((m: messagePropsType) => <Message id={m.id} message={m.message}
                                                                                         avatar={m.avatar}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        if(newMessageElement.current) {
            let text = newMessageElement.current?.value;
            props.dispatch(addMessageActionCreator());
        }
    }

    const onMessageChange = () => {
        if(newMessageElement.current) {
            let text = newMessageElement.current?.value;
            props.dispatch(updateNewMessageTextActionCreator(text));
        }
    }

    return (
        <div>
            <div className={s.globalDialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.inputMessageBlock}>
                        <textarea className={s.inputMessage} onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                        <button className={s.sendMessage} onClick={sendMessage}>SEND</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dialogs;