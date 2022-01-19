export const getFriends = (state) => {
    return state.FriendsList.UserData
}
export const getPageSize = (state) => {
    return state.FriendsList.pageSize
}
export const getTotalUsersCount = (state) => {
    return  state.FriendsList.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.FriendsList.currentPage
}
export const getIsFetching = (state) => {
    return state.FriendsList.isFetching
}
export const getFollowingProgress = (state) => {
    return state.FriendsList.followingProgress
}