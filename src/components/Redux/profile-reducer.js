import {ProfileAPI} from "../Api/api";
import {reset, stopSubmit} from "redux-form";
const ADD_POST = "ADD-POST";
const SET_USER_DATA_PROFILE = "profile/SET-USER-DATA-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PFOTO_PROFILE = "SAVE-PFOTO-PROFILE";
const SAVE_PROFILE = "SAVE_PROFILE"

let initialState = {
    PostData: [
        {id: 1, text: "Mr. Universe", ava: "https://www.ambal.ru/12641317555.jpg"},
        {
            id: 2,
            text: "A friend of Arnold Schwarzenegger",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj2-6pLJ5zWun7WLiJG7bPuyP-iqF5NdZjQ&usqp=CAU"
        },
        {
            id: 3,
            text: "Champion of Liberia for eating stones",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmJBGCZxHssgi1bBOFPJQ26DUSmQr265oIQ&usqp=CAU"
        },
        {
            id: 4,
            text: "Who is he?",
            ava: "https://horrorzone.ru/uploads/persons-02/mini/alexander-nevsky09-377-216.jpg"
        },
        {id: 5, text: "Answered Obvious!", ava: "https://uznayvse.ru/images/content/2018/1/uzn_15157745103.jpg"},
        {id: 6, text: "Alexander Nevsky", ava: "https://znamkaluga.ru/wp-content/uploads/2021/05/1-9.jpg"},
        {id: 7, text: "Here so from here so from", ava: "https://i.playground.ru/p/U2y2xeTYD1SLr-GIjrouNQ.jpeg"}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action, photos) => {
    switch (action.type) {
        case ADD_POST:
            let newsPost = {
                id: 8,
                text: action.newPostText,
                ava: "https://ixbt.online/gametech/covers/2021/08/08/EtA9HW4CuJmFoFDfQT1Hi0D7KcuxdS4inEPFKPhN.jpg"
            }
            state.PostData.push(newsPost);
            return {...state,PostData:[...state.PostData]}
        case SET_STATUS:
            state.status = action.status;
            return {...state}
        case SET_USER_DATA_PROFILE:
            return {...state, profile: action.profile}
        case SAVE_PFOTO_PROFILE:
            return {...state, profile: {...state.profile, photos: action.photos} }
        case SAVE_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPostActionCreator = (newPostText) => {
    return{type: ADD_POST, newPostText}}
export const addPostAndReset = (text) => (dispatch) => {
    dispatch(addPostActionCreator(text));
    dispatch(reset('addNewPost'))
}
export const setUserDataProfile = (profile) => {
    return {type: SET_USER_DATA_PROFILE, profile}
}
export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}
export const savePfotoProfile = (photos) => {
    return {type: SAVE_PFOTO_PROFILE, photos}
}

export const getProfile = (userId) => async (dispatch) =>  {
    let data = await ProfileAPI.getProfile(userId)
    dispatch(setUserDataProfile(data))
}
export const getStatus = (userId) => async (dispatch) =>  {
    let data = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(data.data))
}
export const updateProfileStatus = (status) => async (dispatch) =>  {
    let data = await ProfileAPI.updateProfileStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePfoto = (file) => async (dispatch) =>  {
    let data = await ProfileAPI.savePfoto(file)
    if (data.resultCode === 0) {
        dispatch(savePfotoProfile(data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) =>  {

    let userId = getState().auth.userId
    let data = await ProfileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.data.messages[0]}))
        return Promise.reject(data.data.messages[0])
    }
}


export default profileReducer;