import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const  SET_TOTAL_COUNT= 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}

export type UserDataType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type ActionTypes = ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleIsFollowingInProgress>

let initialState = {
    users: [] as Array<UserDataType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [] as Array<number>,
}

type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })]
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })]
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;

    }
}

export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsers = (users: Array<UserDataType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalCount = (count: number) => {
    return {
        type: SET_TOTAL_COUNT,
        count
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const toggleIsFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {

    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        });

}

export const follow = (userId: number) => (dispatch: any) => {

    dispatch(toggleIsFollowingInProgress(true, userId))
    usersAPI.postFollowUsers(userId)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingInProgress(false, userId))
        })

}

export const unfollow = (userId: number) => (dispatch: any) => {

    dispatch(toggleIsFollowingInProgress(true, userId))
    usersAPI.deleteFollowUsers(userId)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingInProgress(false, userId))
        })

}

export default usersReducer;