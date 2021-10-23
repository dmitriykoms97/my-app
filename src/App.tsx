import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import Nav from "./components/Nav/Nav";
import {Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/login/Login';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";
import withSuspense from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));

type PropsType = {
    initializeApp: () => (dispatch: Dispatch<any>) => void
    initialized: boolean
}

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path='/Dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/Profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/Users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/Login'
                               render={() => <Login/>}/>
                        <Route path='/News' component={News}/>
                        <Route path='/Music' component={Music}/>
                        <Route path='/Settings' component={Settings}/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => (
    {
        initialized: state.app.initialized
    }
)


//@ts-ignore
export default connect(mapStateToProps, {initializeApp})(App);
