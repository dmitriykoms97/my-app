import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

type LocationType = {
    city: string
    country: string
}

type UserDataType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type ActionTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Dmitriy',
            status: 'i want to be programmer',
            location: {city: 'Horishni Plavni', country: 'Ukraine'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Juliya',
            status: 'i`m a good nurse',
            location: {city: 'Horishni Plavni', country: 'Ukraine'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Artem',
            status: 'Unity the best',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            followed: false,
            fullName: 'Oleksiy',
            status: 'want to be a coach of Olympic Champion',
            location: {city: 'Horishni Plavni', country: 'Ukraine'}
        },
    ] as Array<UserDataType>
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;

    }
}

export const followAC = (userId: number) => ({
    type: FOLLOW,
    userId
})
export const unfollowAC = (userId: number) => ({
    type: UNFOLLOW,
    userId
})
export const setUsersAC = (users: UserDataType) => ({
    type: SET_USERS,
    users
})

export default usersReducer;