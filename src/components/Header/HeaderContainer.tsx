import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

type PropsType = {
    getAuthUserData: () => (dispatch: any) => void
    isAuth: boolean
    login: any
}

class HeaderContainer extends React.Component<PropsType>  {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        //@ts-ignore
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

//@ts-ignore
let WithUrlDataContainerHeaderComponent = withRouter(HeaderContainer)

export default connect(mapStateToProps, {getAuthUserData})(WithUrlDataContainerHeaderComponent);