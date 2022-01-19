import {getAuthUserDats} from "./auth-reducer";
const SET_INITIALIZED = " SET_INITIALIZED";
let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_INITIALIZED:
            return {...state,
                initialized: true}
        default:
            return state
    }
}

export const initialized = () => ({type: SET_INITIALIZED})
export const initializ = () => (dispatch) => {
let promise =  dispatch(getAuthUserDats());
promise.then(() => {
    dispatch(initialized())
} )
}

export default appReducer;