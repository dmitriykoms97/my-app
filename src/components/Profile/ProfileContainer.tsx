import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

type PropsType = {
    getUserProfile: (userID: number) => (profile: any) => void
    getUserStatus:(userID: number) => (profile: any) => void
    updateUserStatus: (status: string) => (profile: any) => void
    profile: any
    isAuth: boolean
    status: string
    authorizedUserId: number
}
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = Number(this.props.match.params.userId);
        if(!userID) {
            userID = this.props.authorizedUserId;
            if(!userID) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return <div>
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}

            />
        </div>
    }
}

let mapStateToProps = (state: AppStateType) => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer)

