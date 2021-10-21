import React, {ChangeEvent} from 'react';
import {addPostActionCreator, postsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: Array<postsType>
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postsData,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
