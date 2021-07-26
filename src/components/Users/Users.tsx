import React from 'react';
import {UserDataType} from "../../redux/users-reducer";
import s from './users.module.css'

type PropsType = {
    users: Array<UserDataType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserDataType>) => void
}

const Users = (props: PropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                followed: true,
                fullName: 'Dmitriy',
                status: 'i want to be programmer',
                location: {city: 'Horishni Plavni', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                followed: true,
                fullName: 'Juliya',
                status: 'i`m a good nurse',
                location: {city: 'Horishni Plavni', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Artem',
                status: 'Unity the best',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Oleksiy',
                status: 'want to be a coach of Olympic Champion',
                location: {city: 'Horishni Plavni', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <img src={u.photoUrl} alt='efwefqefq' className={s.photo}/>
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
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.city}
                        </div>
                        <div>
                            {u.location.country}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;