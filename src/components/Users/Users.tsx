import React from 'react';
import {UserDataType} from "../../redux/users-reducer";
import Paginator from "./paginator/Paginator";
import User from "./User";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserDataType>
    currentPage: number
    followingInProgress: Array<number>
}

const Users = (props: PropsType) => {
    debugger

    const portionSize = 10;

    return (
        <div>
            <Paginator totalItemsCount={props.totalItemsCount}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage}
                       portionSize={portionSize}
            />
            {
                props.users.map(u => <User key={u.id}
                                           users={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                    />
                )
            }

        </div>)
};

export default Users;