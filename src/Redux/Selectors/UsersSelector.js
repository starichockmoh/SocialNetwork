import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.UsersPage.users
}
const getActiveUser = (state) => {
    return state.ProfilePage.ProfileInfo
}

export const getFriends = (state) => {
    return state.UsersPage.friends
}
export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
export const getActiveUserFollowed = createSelector(getUsers, getActiveUser, (users,profile) => {
    if (!profile) {
        return null
    }
    else {
        return users.filter(u => u.id === profile.userId)
    }
})



export const getPageSize = (state) => {
    return state.UsersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount
}
export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}
export const getFollowIsProgressing = (state) => {
    return state.UsersPage.followIsProgressing
}