import React from "react";
import s from "./Login.module.css"
import {reduxForm} from "redux-form";
import { Input} from "../Forms/formsControl";
import {required} from "../Validation/Validation";
import {Field} from "redux-form/es";


const LoginForm = ({handleSubmit,error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <Field placeholder={"Email"} name={"email"} validate={[ required]} component={Input} type={"text"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[ required]} component={Input} type={"password"}/>
            </div>
            <div>
                <Field  name={"rememberMe"}  component={Input} type={"checkbox"}/>
                <div className={s.remember}>remember me</div>
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"}
                                  validate={[required]} component={Input} type={"text"}/>}

            {error && <div className={s.formError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>

        </form>
    )
};
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

