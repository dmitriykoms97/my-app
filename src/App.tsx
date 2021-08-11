import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

/*type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}*/

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/Profile/:userId?'
                           render={() => <ProfileContainer />}/>
                    <Route path='/Users'
                           render={() => <UsersContainer />}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
