import {UserAPI} from "../../Api/Api";

const FOLLOW_TOGGLE = 'FOLLOW_USER_TOGGLE'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_FETCHING = 'SET_USERS_FETCHING'
const TOGGLE_FOLLOW_PROGRESSING = 'USERS_TOGGLE_FOLLOW_PROGRESSING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


let InitialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 19,
    isFetching: false,
    followIsProgressing: [],
    currentPage: 1
}

const UsersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOW_PROGRESSING:
            return {
                ...state,
                followIsProgressing: action.isProgressing
                    ? [...state.followIsProgressing, action.userId]
                    : state.followIsProgressing.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const toggleFollowProgressing = (isProgressing, userId) => ({
    type: TOGGLE_FOLLOW_PROGRESSING,
    isProgressing,
    userId
})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE,page})
export const toggleFollow = (userId) => ({type: FOLLOW_TOGGLE, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching})


export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setFetching(true))   //активируем крутилку
    let response = await UserAPI.getUsers(currentPage, pageSize)
    dispatch(setFetching(false)) //снимаем крутилку
    dispatch(setUsers(response.items)) //сетаем юзеров с респонса
    dispatch(setTotalUsersCount(response.totalCount))//сетаем общее число юзеров

}
export const FollowOrUnfollow = (userId,follow) => async (dispatch) => {
    dispatch(toggleFollowProgressing(true, userId))
    if (follow){
        let response = await UserAPI.followUser(userId)
        if (response.resultCode === 0) {
            dispatch(toggleFollow(userId))
        }}
    else {let response = await UserAPI.unfollowUser(userId)
        if (response.resultCode === 0) {
            dispatch(toggleFollow(userId))
        }}
    dispatch(toggleFollowProgressing(false, userId))
}


export default UsersReducer;