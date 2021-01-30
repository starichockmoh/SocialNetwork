import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.UsersPage.users
}

export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true)
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