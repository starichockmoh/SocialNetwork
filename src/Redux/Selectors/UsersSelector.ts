import {createSelector} from "reselect";
import {AppStateType} from "../ReduxStore";
import {ProfileType, UserType} from "../../Types/Types";

const getUsers = (state:AppStateType):Array<UserType> => {
    return state.UsersPage.users
}
const getActiveUser = (state:AppStateType):ProfileType | null => {
    return state.ProfilePage.ProfileInfo
}

export const getFriends = (state:AppStateType): UserType[] => {
    return state.UsersPage.friends
}
export const getUsersSuper = createSelector(getUsers, (users):UserType[] => {
    return users.filter(u => true)
})
export const getActiveUserFollowed = createSelector(getUsers, getActiveUser, (users,profile):null | UserType[] => {
    if (!profile) {
        return null
    }
    else {
        return users.filter(u => u.id === profile.userId)
    }
})



export const getPageSize = (state:AppStateType):number => {
    return state.UsersPage.pageSize
}
export const getTotalUsersCount = (state:AppStateType):number => {
    return state.UsersPage.totalUsersCount
}
export const getIsFetching = (state:AppStateType):boolean => {
    return state.UsersPage.isFetching
}
export const getFollowIsProgressing = (state:AppStateType):number[] => {
    return state.UsersPage.followIsProgressing
}