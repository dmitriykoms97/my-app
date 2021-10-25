import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

type PropsType = {
    getUserProfile: (userID: number) => (profile: any) => void
    getUserStatus: (userID: number) => (profile: any) => void
    updateUserStatus: (status: string) => (profile: any) => void
    profile: any
    isAuth: boolean
    status: string
    authorizedUserId: number
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userID = Number(this.props.match.params.userId);
        if (!userID) {
            userID = this.props.authorizedUserId;
            if (!userID) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <div>
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)

