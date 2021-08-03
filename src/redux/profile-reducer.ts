import {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogs-reducer";

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
    newPostText: '',
    profile: null,
}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}


export type ProfileActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof setUserProfile>

export default profileReducer;