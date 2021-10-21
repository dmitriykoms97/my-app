import React from 'react';
import {
    addMessageActionCreator,
    dialogsPropsType, messagePropsType,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export type DialogPageType = {
    dialogsData: Array<dialogsPropsType>
    messageData: Array<messagePropsType>
}

type MapStateToPropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
                dispatch(addMessageActionCreator(newMessageText));
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);