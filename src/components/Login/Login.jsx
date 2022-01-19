import React from "react";
import {LoginReduxForm} from "./LoginInputForm";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)}

    if( props.isAuth) return <Redirect to={"/Profile"} />
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})

export default connect( mapStateToProps, {login}) (Login);