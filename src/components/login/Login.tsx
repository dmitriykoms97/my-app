import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input,} from "../common/preloader/formsControl/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {authLoginTC, LoginRequestDataType} from "../../redux/auth-reducer";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../common/preloader/formsControl/FromsControl.module.css';


const maxLength50 = maxLengthCreator(50)

const LoginForm: React.FC<InjectedFormProps<LoginRequestDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
                {createField('Email', 'email', Input, [requiredField, maxLength50])}
                {createField('Password', 'password', Input, [requiredField, maxLength50], {type: 'password'})}
                {createField(null, 'rememberMe', Input, null, {type: 'checkbox'}, 'remember me')}
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginRequestDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

type PropsType = {
    authLoginTC: (data: LoginRequestDataType) => (dispatch: Dispatch) => void
    isAuth: boolean
}

const Login = (props: PropsType) => {

    const onSubmit = (data: LoginRequestDataType) => {
        props.authLoginTC(data)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

//@ts-ignore
export default connect(mapStateToProps, {authLoginTC})(Login);