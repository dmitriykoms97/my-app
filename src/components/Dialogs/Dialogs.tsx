import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {dialogPageType} from "../../redux/store";
import {dialogsPropsType, messagePropsType} from "../../redux/dialogs-reducer";


type PropsType = {
    sendMessage: () => void
    onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    dialogsPage: dialogPageType
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

    return (
        <div>
            <div className={s.globalDialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.inputMessageBlock}>
                        <textarea placeholder='Enter your message'
                                  className={s.inputMessage}
                                  onChange={props.onMessageChange}
                                  value={props.newMessageText}/>
                        <button className={s.sendMessage} onClick={props.sendMessage}>SEND</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dialogs;