import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

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
                isAuth: true
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

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email, isAuth} = response.data.data
                dispatch(setAuthUserData(id, email, login, isAuth))
            }
        })
}


export default authReducer;