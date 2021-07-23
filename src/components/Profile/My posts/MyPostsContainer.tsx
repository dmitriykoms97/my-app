import React, {ChangeEvent} from 'react';
import {addPostActionCreator, postsType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: Array<postsType>
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.target.value;
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
