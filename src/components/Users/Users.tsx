import axios from 'axios';
import React from 'react';
import {UserDataType} from "../../redux/users-reducer";
import s from './users.module.css'
import userUnknownPhoto from '../../assets/img/user.png';

type PropsType = {
    users: Array<UserDataType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserDataType>) => void
}

const Users = (props: PropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                //@ts-ignore
                props.setUsers(response.data.items)
            })

        }
    }

    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userUnknownPhoto} alt='' className={s.photo}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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
        </div>
    );
};

export default Users;