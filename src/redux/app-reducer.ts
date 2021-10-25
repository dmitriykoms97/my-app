import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'


export type ActionTypes = ReturnType<typeof setInitializedSuccess>

let initialState = {
    initialized: false
}

type InitialStateType = {
    initialized: boolean
}

const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;

    }
}

export const setInitializedSuccess = () => {
    return {
        type: SET_INITIALIZED,
    } as const
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(setInitializedSuccess())
    })
}



export default appReducer;