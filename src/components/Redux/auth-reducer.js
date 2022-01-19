import {AuthAPI, securityAPI} from "../Api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SACSSES = "auth/GET-CAPTCHA-URL-SACSSES";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state,...action.response}
        case GET_CAPTCHA_URL_SACSSES:
            return {...state,...action.response}
        default:
            return state
    }
}

export const setAuthUserData = (userId,email,login,isAuth) =>
    ({type: SET_USER_DATA, response: {userId,email,login,isAuth}});

export const getCaptchaUrlSacsses = (captchaUrl) =>
    ({type: GET_CAPTCHA_URL_SACSSES, response: {captchaUrl}});

export const getAuthUserDats = () => async (dispatch) => {
    let response = await AuthAPI.getAuth()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDats())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSacsses(captchaUrl))
}


export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;