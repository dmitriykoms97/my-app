import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header/Header.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, RootStateType} from './redux/state';

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}
const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() => <Dialogs
                               state={props.state.dialogsPage}/>}/>
                    <Route path='/Profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               newPostText={props.state.profilePage.newPostText}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
