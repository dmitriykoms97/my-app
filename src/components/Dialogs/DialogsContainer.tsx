import React, {ChangeEvent} from 'react';
import {ActionsTypes, dialogPageType, StoreType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: dialogPageType
    newMessageText: string
}

type mapDispatchToPropsType = {
    sendMessage: () => void
    onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
                dispatch(addMessageActionCreator());
        },
        onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
                let text = e.target.value;
                dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);