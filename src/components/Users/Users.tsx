import React from 'react';
import s from "./users.module.css";
import userUnknownPhoto from "../../assets/img/user.png";
import {UserDataType} from "../../redux/users-reducer";
import { NavLink } from 'react-router-dom';
import {usersAPI} from "../../api/api";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserDataType>
    currentPage: number
    toggleFollowingInProgress: any
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    //@ts-ignore
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}


            </div>
            {props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userUnknownPhoto} alt=''
                             className={s.photo}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true)
                                usersAPI.deleteFollowUsers(u.id)
                                    .then(data => {
                                        if(data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false)
                                    })
                            }}>UNFOLLOW</button>
                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true)
                                usersAPI.postFollowUsers(u.id)
                                    .then(data => {
                                        if(data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false)
                                    })
                            }}>FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'u.location.city'}
                        </div>
                        <div>
                            {'u.location.country'}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>)
};

export default Users;