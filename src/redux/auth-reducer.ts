const SET_USER_DATA = 'SET_USER_DATA'

export type ActionTypes = ReturnType<typeof setAuthUserData>

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

type InitialStateType = typeof initialState

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

export const setAuthUserData = (id: any, email: any, login: any, isAuth: boolean) => {
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


export default authReducer;