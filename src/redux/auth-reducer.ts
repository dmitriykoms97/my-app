import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

export type LoginRequestDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export type ActionTypes = ReturnType<typeof setAuthUserData>

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

type InitialStateType = {
    id: number | null
    email: string | null,
    login:  string | null,
    isAuth: boolean
}

const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;

    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
}

export const authLoginTC = (data: LoginRequestDataType) => async (dispatch: Dispatch) => {
    let res = await authAPI.login(data)
        if(res.data.resultCode === 0) {
            //@ts-ignore
            dispatch(getAuthUserData())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Email or password is wrong, please try again!'
            dispatch(stopSubmit('login', {_error: message}))
        }
}
export const authLogoutTC = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logout();
        if(res.data.resultCode === 0) {
            //@ts-ignore
            dispatch(setAuthUserData(null, null, null, false))
        }
}


export default authReducer;