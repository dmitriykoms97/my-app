import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {dialogPageType, dialogsPropsType, messagePropsType} from '../../redux/state';


type PropsType = {
    state: dialogPageType
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.state.dialogsData.map((d: dialogsPropsType) => <DialogsItem id={d.id} name={d.name}
                                                                                            avatar={d.avatar}/>)

    let messagesElements = props.state.messageData.map((m: messagePropsType) => <Message id={m.id} message={m.message}
                                                                                         avatar={m.avatar}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        alert(newMessageElement.current?.value)
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
                        <textarea className={s.inputMessage} ref={newMessageElement}></textarea>
                        <button className={s.sendMessage} onClick={sendMessage}>SEND</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dialogs;