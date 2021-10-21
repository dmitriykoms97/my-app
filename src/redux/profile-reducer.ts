import {addMessageActionCreator} from "./dialogs-reducer";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type postsType = {
    id: number
    message: string
    likeCount: number
}

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'Its my first post!', likeCount: 99},
        {id: 2, message: 'Its my first post!', likeCount: 45},
        {id: 2, message: 'Its my first post!', likeCount: 45},
        {id: 2, message: 'Its my first post!', likeCount: 45}
    ] as Array<postsType>,
    profile: null,
    status: '',
}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsType = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
            };
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case "SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case 'DELETE_POST':
            return {...state,
                    postsData: state.postsData.filter(p => p.id !== action.postId)
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText,
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET_STATUS',
        status
    } as const
}
export const deletePost = (postId: number) => {
    return {
        type: 'DELETE_POST',
        postId
    } as const
}

export const getUserProfile = (userID: number) => async (dispatch: (action: ProfileActionsTypes) => void) => {
    let response = await usersAPI.getProfile(userID)
        dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userID: number) => async (dispatch: (action: ProfileActionsTypes) => void) => {
    let response = await profileAPI.getStatus(userID)
        dispatch(setStatus(response.data));
}

export const updateUserStatus = (status: string) => async (dispatch: (action: ProfileActionsTypes) => void) => {
    let response =  await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}


export type ProfileActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof deletePost>

export default profileReducer;