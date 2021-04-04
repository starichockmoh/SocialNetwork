import {UserAPI} from "../../Api/Api";
import {ResultCodesEnum, UserType} from "../../Types/Types";
import {Dispatch} from "redux";
import {AppStateType} from "../ReduxStore";
import {ThunkAction} from "redux-thunk";

const FOLLOW_TOGGLE = 'FOLLOW_USER_TOGGLE'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_FETCHING = 'SET_USERS_FETCHING'
const TOGGLE_FOLLOW_PROGRESSING = 'USERS_TOGGLE_FOLLOW_PROGRESSING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_FRIEND_PAGE = 'SET_CURRENT_FRIEND_PAGE'
const SET_CURRENT_SEARCH_TERM = 'SET_CURRENT_SEARCH_TERM'


let InitialState = {
    users: [] as Array<UserType>,
    friends: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 19,
    totalFriendsCount: 3,
    isFetching: false,
    followIsProgressing: [] as Array<number>,
    currentPage: 1,
    currentFriendPage: 1,
    currentSearchTerm: ''
};
type InitialStateType = typeof InitialState
const UsersReducer = (state = InitialState, action: ActionsType):InitialStateType => {
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
            let HelperUsersArray = (array:Array<UserType>) => {
                return array.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
            if (action.isFriend) {
                return {
                    ...state,
                    friends: HelperUsersArray(state.friends)
                }
            }
            return {
                ...state,
                users: HelperUsersArray(state.users)
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>
type ActionsType = toggleFollowProgressingActionType | setCurrentFriendPageACType | setCurrentPageACType | toggleFollowActionType |
    setUsersActionType | setTotalUsersCountActionType | setFetchingActionType | setCurrentSearchTermActionType
type toggleFollowProgressingActionType = {
    type: typeof TOGGLE_FOLLOW_PROGRESSING
    isProgressing: boolean
    userId: number
    isFriend: boolean
}
export type setCurrentFriendPageACType = {
    type: typeof SET_CURRENT_FRIEND_PAGE
    FriendsPage: number
}
export type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    page:number
}
type toggleFollowActionType = {
    type: typeof FOLLOW_TOGGLE
    userId: number
    isFriend: boolean
}
type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
    isFriendsArray: boolean
}
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount:number
    isFriends: boolean
}
type setFetchingActionType = {
    type: typeof SET_FETCHING
    isFetching: boolean
}
type setCurrentSearchTermActionType = {
    type: typeof SET_CURRENT_SEARCH_TERM
    term: string
}

export const toggleFollowProgressing = (isProgressing:boolean, userId:number,isFriend:boolean):toggleFollowProgressingActionType => ({
    type: TOGGLE_FOLLOW_PROGRESSING, isProgressing, userId, isFriend
})
export const setCurrentFriendPageAC = (FriendsPage:number): setCurrentFriendPageACType => ({type: SET_CURRENT_FRIEND_PAGE,FriendsPage})
export const setCurrentPageAC = (page:number): setCurrentPageACType => ({type: SET_CURRENT_PAGE,page})
export const toggleFollow = (userId: number,isFriend: boolean): toggleFollowActionType => ({type: FOLLOW_TOGGLE, userId,isFriend})
export const setUsers = (users:Array<UserType>,isFriendsArray:boolean):setUsersActionType => ({type: SET_USERS, users,isFriendsArray})
export const setTotalUsersCount = (totalUsersCount:number, isFriends=false): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount,isFriends})
export const setFetching = (isFetching:boolean): setFetchingActionType => ({type: SET_FETCHING, isFetching})
export const setCurrentSearchTerm = (term:string): setCurrentSearchTermActionType => ({type: SET_CURRENT_SEARCH_TERM,term})

//Пример типизации санки через Dispatch<>
export const requestUsers = (currentPage:number, pageSize:number, friend=false,term='') =>
    async (dispatch:Dispatch<ActionsType>, getState: () => AppStateType) => {
    dispatch(setFetching(true))   //активируем крутилку
    if (term) {
        dispatch(setCurrentSearchTerm(term))
    }
    let response = await UserAPI.getUsers(currentPage, pageSize, friend,term)
    dispatch(setFetching(false)) //снимаем крутилку
    dispatch(setUsers(response.items,friend)) //сетаем юзеров с респонса
    dispatch(setTotalUsersCount(response.totalCount,friend))//сетаем общее число юзеров

}
//Пример типизации санки через ThunkAction<>
export const FollowOrUnfollow = (userId:number,follow:boolean,isFriend = false):ThunkType =>
    async (dispatch,getState) => {
    dispatch(toggleFollowProgressing(true, userId, isFriend))
    if (follow){
        let response = await UserAPI.followUser(userId)
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(toggleFollow(userId,isFriend))
        }}
    else {let response = await UserAPI.unfollowUser(userId)
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(toggleFollow(userId,isFriend))
        }}
    dispatch(toggleFollowProgressing(false, userId, isFriend))
}


export default UsersReducer;