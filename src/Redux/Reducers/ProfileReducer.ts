import {UserAPI} from "../../Api/Api";
import {SetCurrentUserProfile, SetCurrentUserProfileActionType} from "./AuthReducer";
import {stopSubmit} from "redux-form";
import {HelperStopSubmit} from "../../Utils/HelperStopSubmit";
import {PhotosType, PostType, ProfileType, ResultCodesEnum} from "../../Types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";


const PROFILE_ADD_POST = 'PROFILE_ADD_POST'
const PROFILE_SET_PROFILE = 'PROFILE_SET_PROFILE'
const PROFILE_SET_PROFILE_STATUS = 'PROFILE_SET_PROFILE_STATUS'
const PROFILE_DELETE_POST = 'PROFILE_DELETE_POST'
const PROFILE_UPDATE_PHOTO = 'PROFILE_UPDATE_PHOTO'
const PROFILE_IS_FETCHING_PHOTO_TOGGLE = 'PROFILE_IS_FETCHING_PHOTO_TOGGLE'
const SUBMIT_WAS_SUCCESS = 'SUBMIT_WAS_SUCCESS'



let InitialState = {
    PostsData: [
        {message: 'Heil Hitler', id: 1, likecount: 1488},
        {message: 'salam', id: 2, likecount: 228},
    ] as Array<PostType>,
    ProfileInfo: null as ProfileType | null,
    ProfileStatus: '',
    isFetching: false,
    submitWasSuccess: false
}
export type InitialStateType = typeof InitialState

const ProfileReducer = (state:InitialStateType = InitialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case SUBMIT_WAS_SUCCESS: {
            return {
                ...state,
                submitWasSuccess: action.success
            }
        }
        case PROFILE_DELETE_POST: {
            return {
                ...state,
                PostsData: state.PostsData.filter(u => u.id !== action.postId)
            }
        }

        case PROFILE_ADD_POST: {
            let NewPost = {
                message: action.post,
                id: 5,
                likecount: 148,
            }
            return {
                ...state,
                PostsData: [...state.PostsData, NewPost]
            }
        }
        case PROFILE_SET_PROFILE:
            return {
                ...state,
                ProfileInfo: action.ProfileInfo
            }
        case PROFILE_SET_PROFILE_STATUS:
            return {
                ...state,
                ProfileStatus: action.status
            }
        case PROFILE_UPDATE_PHOTO:
            return {
                ...state,
                ProfileInfo: {...state.ProfileInfo, photos: {...action.photo}} as ProfileType,
            }
        case PROFILE_IS_FETCHING_PHOTO_TOGGLE:{
            return {
                ...state,
                isFetching: !state.isFetching,
            }
        }
        default:
            return state
    }
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>

type ActionsType = deleteProfilePostActionType | submitWasSuccessActionType | addNewPostActionType |
    setProfileActionType | setProfileStatusActionType | updateProfilePhotoActionType |
    isFetchingPhotoToggleActionType

type deleteProfilePostActionType = {
    type: typeof PROFILE_DELETE_POST
    postId: number
}
type submitWasSuccessActionType = {
    type: typeof SUBMIT_WAS_SUCCESS
    success: boolean
}
type addNewPostActionType = {
    type: typeof PROFILE_ADD_POST
    post: string
}
type setProfileActionType = {
    type: typeof PROFILE_SET_PROFILE
    ProfileInfo: ProfileType
}
type setProfileStatusActionType = {
    type: typeof PROFILE_SET_PROFILE_STATUS
    status: string
}
type updateProfilePhotoActionType = {
    type: typeof PROFILE_UPDATE_PHOTO
    photo: PhotosType
}
type isFetchingPhotoToggleActionType = {
    type: typeof PROFILE_IS_FETCHING_PHOTO_TOGGLE
}
export const deleteProfilePost = (postId:number):deleteProfilePostActionType => ({type: PROFILE_DELETE_POST, postId})
export const submitWasSuccess = (success: boolean):submitWasSuccessActionType => ({type: SUBMIT_WAS_SUCCESS, success})
export const addNewPost = (post:string): addNewPostActionType => ({type: PROFILE_ADD_POST, post})
export const setProfile = (ProfileInfo:ProfileType):setProfileActionType => ({type: PROFILE_SET_PROFILE, ProfileInfo})
export const setProfileStatus = (status:string):setProfileStatusActionType => ({type: PROFILE_SET_PROFILE_STATUS, status})
const updateProfilePhoto = (photo:PhotosType):updateProfilePhotoActionType => ({type: PROFILE_UPDATE_PHOTO, photo})
const isFetchingPhotoToggle = ():isFetchingPhotoToggleActionType => ({type: PROFILE_IS_FETCHING_PHOTO_TOGGLE})

export const getProfileStatus = (userId:string | number): ThunkType  =>
    async (dispatch,getState) => {
    let response = await UserAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(response))

}
export const UpdateProfileStatus = (status:string) : ThunkType  =>
    async (dispatch,getState) => {
        let data = await UserAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setProfileStatus(status))
        }

}
export  const UpdateProfileInfo = (id: number, profile: ProfileType) : ThunkType  =>
    async (dispatch,getState) => {
    let response = await UserAPI.changeProfile(id, {...profile})
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(getProfile(id))
        dispatch(submitWasSuccess(true))
    }
    else {
        let errorMessages = response.messages.length > 0 ? response.messages : 'Some error'
        if (typeof errorMessages !== "string"){
            dispatch(stopSubmit('ProfileInfoInput', {'contacts' : {...HelperStopSubmit(errorMessages)}}))
        }
       else {
            dispatch(stopSubmit('ProfileInfoInput', {_error: errorMessages}))
        }
    }

}
export const getProfile = (userId: string | number) : ThunkType =>
    async (dispatch,getState) => {
    let data = await UserAPI.getUserProfile(userId)
    dispatch(setProfile(data))

}
export const saveMainPhoto = (photo:any) : ThunkAction<Promise<void>, AppStateType, any, ActionsType | SetCurrentUserProfileActionType>  =>
    async (dispatch,getState) => {
    dispatch(isFetchingPhotoToggle())
    let data = await UserAPI.changeMainPhoto(photo)
    if (data.resultCode === ResultCodesEnum.Success){
        dispatch(isFetchingPhotoToggle())
        dispatch(updateProfilePhoto(data.photos))
        dispatch(SetCurrentUserProfile(data.photos.large))
    }
}

export default ProfileReducer;