import React, {MouseEventHandler} from 'react';
import userUnknownPhoto from "../../assets/img/user.png";
import s from "./users.module.css";
import axios from "axios";
import {UserDataType} from "../../redux/users-reducer";

type PropsType = {
    users: Array<UserDataType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserDataType>) => void
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalUsersCount: number) => void
}

class Users extends React.Component<PropsType> {

    componentDidMount() {

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }



        return (
            <div>
                <div>
                    {pages.map(p => {
                        //@ts-ignore
                       return <span className={this.props.currentPage === p && s.selectedPage}
                                    onClick={(e) => {this.onPageChanged(p)} }>{p}</span>
                    })}


                </div>
                {this.props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userUnknownPhoto} alt=''
                             className={s.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
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
}


export default Users;