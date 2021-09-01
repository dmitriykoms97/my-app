import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PropsType = {
    getUserProfile: (userID: number) => (profile: any) => void
    profile: any
    isAuth: boolean
}
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = Number(this.props.match.params.userId);
        if(!userID) {
            debugger
            userID = 2;
        }
        this.props.getUserProfile(userID)
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: AppStateType) => (
    {
        profile: state.profilePage.profile,
    }
)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileContainer)

