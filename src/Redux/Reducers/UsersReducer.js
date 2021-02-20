import {UserAPI} from "../../Api/Api";

const FOLLOW_TOGGLE = 'FOLLOW_USER_TOGGLE'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_FETCHING = 'SET_USERS_FETCHING'
const TOGGLE_FOLLOW_PROGRESSING = 'USERS_TOGGLE_FOLLOW_PROGRESSING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_FRIEND_PAGE = 'SET_CURRENT_FRIEND_PAGE'
const SET_CURRENT_SEARCH_TERM = 'SET_CURRENT_SEARCH_TERM'



let InitialState = {
    users: [],
    friends: [],
    pageSize: 15,
    totalUsersCount: 19,
    totalFriendsCount: 3,
    isFetching: false,
    followIsProgressing: [],
    currentPage: 1,
    currentFriendPage: 1,
    currentSearchTerm: ''
}

const UsersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SEARCH_TERM:
            return {
                ...state,
                currentSearchTerm: action.term
            }
        case SET_CURRENT_FRIEND_PAGE:
            return {
                ...state,
                currentFriendPage: action.FriendsPage
            }
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
            if (action.isFriendsArray){
                return {
                    ...state,
                    friends: [...action.users]
                }
            }
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            if (action.isFriends){
                return {
                    ...state,
                    totalFriendsCount: action.totalUsersCount
                }
            }
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
export const setCurrentFriendPageAC = (FriendsPage) => ({type: SET_CURRENT_FRIEND_PAGE,FriendsPage})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE,page})
export const toggleFollow = (userId) => ({type: FOLLOW_TOGGLE, userId})
export const setUsers = (users,isFriendsArray) => ({type: SET_USERS, users,isFriendsArray})
export const setTotalUsersCount = (totalUsersCount, isFriends=false) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount,isFriends})
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching})
export const setCurrentSearchTerm = (term) => ({type: SET_CURRENT_SEARCH_TERM,term})


export const requestUsers = (currentPage, pageSize, friend=false,term='') => async (dispatch) => {
    dispatch(setFetching(true))   //активируем крутилку
    if (term) {
        dispatch(setCurrentSearchTerm(term))
    }
    let response = await UserAPI.getUsers(currentPage, pageSize, friend,term)
    dispatch(setFetching(false)) //снимаем крутилку
    dispatch(setUsers(response.items,friend)) //сетаем юзеров с респонса
    dispatch(setTotalUsersCount(response.totalCount,friend))//сетаем общее число юзеров

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