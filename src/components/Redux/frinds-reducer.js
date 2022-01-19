import {FollowAPI, FriendsAPI, UnfollowAPI} from "../Api/api";
import {updateObjectArray} from "../Validation/Helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERDATA = "SET_USERDATA";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    UserData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
    fake: 10

};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                UserData: updateObjectArray(state.UserData, action.userId,"id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                UserData: updateObjectArray(state.UserData, action.userId,"id", {followed: false})
            }
        case SET_USERDATA: {
            return {...state, UserData: action.UserData}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUserData = (UserData) => ({type: SET_USERDATA, UserData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getFrinds = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await FriendsAPI.getFriends(currentPage, pageSize)
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        dispatch(setUserData(data.items))
    }
}
const followunfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId) => {
    return async (dispatch) => {
        followunfollow(dispatch, userId, FollowAPI.postFollow.bind(userId), followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followunfollow(dispatch, userId, UnfollowAPI.deleteUnfollow.bind(userId), unfollowSuccess)
    }
}

export default friendsReducer;