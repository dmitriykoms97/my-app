import React from 'react';
import {UserDataType} from "../../redux/users-reducer";
import Paginator from "./paginator/Paginator";
import User from "./User";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserDataType>
    currentPage: number
    followingInProgress: Array<number>
}

const Users = (props: PropsType) => {

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
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