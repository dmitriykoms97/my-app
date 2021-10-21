import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authLogoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    isAuth: boolean
    login: any
    authLogoutTC: () => (dispatch: any) => void
}

class HeaderContainer extends React.Component<PropsType>  {



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
export default connect(mapStateToProps, {authLogoutTC})(HeaderContainer);