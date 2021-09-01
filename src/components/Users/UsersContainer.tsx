import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow,
    UserDataType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type PropsType = {
    users: Array<UserDataType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: any
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
    withAuthRedirect
)(UsersContainer)