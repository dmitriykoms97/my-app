import React from 'react';
import s from "./users.module.css";
import userUnknownPhoto from "../../assets/img/user.png";
import {UserDataType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';

type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: UserDataType
    followingInProgress: Array<number>
}

const User = (props: PropsType) => {

    let user = props.users

    return (
        <div>
            <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userUnknownPhoto} alt=''
                             className={s.photo}/>
                            </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          props.unfollow(user.id)
                                      }}>UNFOLLOW</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          props.follow(user.id)
                                      }}>FOLLOW</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
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
        </div>
    )
}

export default User;