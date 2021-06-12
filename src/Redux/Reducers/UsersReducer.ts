import {UserAPI} from "../../Api/Api";
import {ActionsType, ResultCodesEnum, UserType} from "../../Types/Types";
import {Dispatch} from "redux";
import {AppStateType} from "../ReduxStore";
import {ThunkAction} from "redux-thunk";


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
    currentSearchTerm: '',
    isOnlyFollowed: false
};
type InitialStateType = typeof InitialState

const UsersReducer = (state = InitialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_CURRENT_SEARCH_TERM":
            return {
                ...state,
                currentSearchTerm: action.term
            }
        case "SET_CURRENT_FRIEND_PAGE":
            return {
                ...state,
                currentFriendPage: action.FriendsPage
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.page
            }
        case "FOLLOW_TOGGLE":
            let HelperUsersArray = (array: Array<UserType>) => {
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
                    friends: HelperUsersArray(state.friends),
                    users: HelperUsersArray(state.users)
                }
            }
            return {
                ...state,
                users: HelperUsersArray(state.users)
            }
        case "SET_USERS":
            if (action.isFriendsArray) {
                return {
                    ...state,
                    friends: [...action.users],
                    users: [...action.users]
                }
            }
            return {
                ...state,
                users: [...action.users]
            }
        case "SET_TOTAL_USERS_COUNT":
            if (action.isFriends) {
                return {
                    ...state,
                    totalFriendsCount: action.totalUsersCount,
                    totalUsersCount: action.totalUsersCount
                }
            }
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "SET_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_FOLLOW_PROGRESSING":
            return {
                ...state,
                followIsProgressing: action.isProgressing
                    ? [...state.followIsProgressing, action.userId]
                    : state.followIsProgressing.filter(id => id !== action.userId)
            }
        case "SET_IS_ONLY_FOLLOWED":
            return {
                ...state,
                isOnlyFollowed: action.isOnlyFollowed
            }
        default:
            return state
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, UsersActionsType>
type UsersActionsType = ActionsType<typeof UserActions>

export type setCurrentFriendPageACType = ReturnType<typeof UserActions.setCurrentFriendPageAC>
export type setCurrentPageACType = ReturnType<typeof UserActions.setCurrentPageAC>

export const UserActions = {
    toggleFollowProgressing: (isProgressing: boolean, userId: number, isFriend: boolean) => ({
        type: "TOGGLE_FOLLOW_PROGRESSING", isProgressing, userId, isFriend
    } as const),
    setCurrentFriendPageAC: (FriendsPage: number) => ({type: "SET_CURRENT_FRIEND_PAGE", FriendsPage} as const),
    setCurrentPageAC: (page: number) => ({type: "SET_CURRENT_PAGE", page} as const),
    toggleFollow: (userId: number, isFriend: boolean) => ({type: "FOLLOW_TOGGLE", userId, isFriend} as const),
    setUsers: (users: Array<UserType>, isFriendsArray: boolean) => ({
        type: "SET_USERS",
        users,
        isFriendsArray
    } as const),
    setTotalUsersCount: (totalUsersCount: number, isFriends = false) =>
        ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount, isFriends} as const),
    setFetching: (isFetching: boolean) => ({type: "SET_FETCHING", isFetching} as const),
    setCurrentSearchTerm: (term: string) => ({type: "SET_CURRENT_SEARCH_TERM", term} as const),
    setIsOnlyFollowed: (isOnlyFollowed: boolean) => ({type: "SET_IS_ONLY_FOLLOWED", isOnlyFollowed} as const)
}

//Пример типизации санки через Dispatch<>
export const requestUsers = (currentPage: number, pageSize: number, friend = false, term = '') =>
    async (dispatch: Dispatch<UsersActionsType>, getState: () => AppStateType) => {
        dispatch(UserActions.setFetching(true))   //активируем крутилку
        dispatch(UserActions.setCurrentSearchTerm(term))
        dispatch(UserActions.setIsOnlyFollowed(friend))
        let response = await UserAPI.getUsers(currentPage, pageSize, friend, term)
        dispatch(UserActions.setFetching(false)) //снимаем крутилку
        dispatch(UserActions.setUsers(response.items, friend)) //сетаем юзеров с респонса
        dispatch(UserActions.setTotalUsersCount(response.totalCount, friend))//сетаем общее число юзеров

    }
//Пример типизации санки через ThunkAction<>
export const FollowOrUnfollow = (userId: number, follow: boolean, isFriend = false): ThunkType =>
    async (dispatch, getState) => {
        dispatch(UserActions.toggleFollowProgressing(true, userId, isFriend))
        if (follow) {
            let response = await UserAPI.followUser(userId)
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(UserActions.toggleFollow(userId, isFriend))
            }
        } else {
            let response = await UserAPI.unfollowUser(userId)
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(UserActions.toggleFollow(userId, isFriend))
            }
        }
        dispatch(UserActions.toggleFollowProgressing(false, userId, isFriend))
    }


export default UsersReducer;