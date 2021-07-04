import {UserAPI} from "../../Api/Api";
import {AuthActions, SetCurrentUserProfileActionType} from "./AuthReducer";
import {stopSubmit} from "redux-form";
import {HelperStopSubmit} from "../../Utils/HelperStopSubmit";
import {ActionsType, NullableType, PhotosType, PostType, ProfileType, ResultCodesEnum} from "../../Types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";

let InitialState = {
    PostsData: [
        {message: 'Здарова всем славянам', id: 1, likecount: 1488},
        {message: 'salam', id: 2, likecount: 228},
        {message: 'Это мой немой пост', id: 3, likecount: 3},
    ] as Array<PostType>,
    ProfileInfo: null as NullableType<ProfileType>,
    ProfileStatus: '',
    isFetching: false,
    submitWasSuccess: false
}
export type InitialStateType = typeof InitialState

const ProfileReducer = (state:InitialStateType = InitialState, action: ProfileActionsType):InitialStateType => {
    switch (action.type) {
        case "SUBMIT_WAS_SUCCESS": {
            return {
                ...state,
                submitWasSuccess: action.success
            }
        }
        case "PROFILE_DELETE_POST": {
            return {
                ...state,
                PostsData: state.PostsData.filter(u => u.id !== action.postId)
            }
        }

        case "PROFILE_ADD_POST": {
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
        case "PROFILE_SET_PROFILE":
            return {
                ...state,
                ProfileInfo: action.ProfileInfo
            }
        case "PROFILE_SET_PROFILE_STATUS":
            return {
                ...state,
                ProfileStatus: action.status
            }
        case "PROFILE_UPDATE_PHOTO":
            return {
                ...state,
                ProfileInfo: {...state.ProfileInfo, photos: {...action.photo}} as ProfileType,
            }
        case "PROFILE_IS_FETCHING_PHOTO_TOGGLE": {
            return {
                ...state,
                isFetching: !state.isFetching,
            }
        }
        default:
            return state
    }
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ProfileActionsType>
type ProfileActionsType = ActionsType<typeof ProfileActions>

export const ProfileActions = {
    deleteProfilePost: (postId:number) => ({type: "PROFILE_DELETE_POST", postId} as const),
    submitWasSuccess: (success: boolean) => ({type: "SUBMIT_WAS_SUCCESS", success} as const),
    addNewPost: (post:string) => ({type: "PROFILE_ADD_POST", post} as const),
    setProfile: (ProfileInfo:ProfileType) => ({type: "PROFILE_SET_PROFILE", ProfileInfo} as const),
    setProfileStatus: (status:string) => ({type: "PROFILE_SET_PROFILE_STATUS", status} as const),
    updateProfilePhoto: (photo:PhotosType) => ({type: "PROFILE_UPDATE_PHOTO", photo} as const),
    isFetchingPhotoToggle: () => ({type: "PROFILE_IS_FETCHING_PHOTO_TOGGLE"} as const),
}


export const getProfileStatus = (userId:string | number | null): ThunkType  =>
    async (dispatch,getState) => {
    let response = await UserAPI.getProfileStatus(userId)
    dispatch(ProfileActions.setProfileStatus(response))

}
export const UpdateProfileStatus = (status:string) : ThunkType  =>
    async (dispatch,getState) => {
        let data = await UserAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(ProfileActions.setProfileStatus(status))
        }

}
export  const UpdateProfileInfo = (id: number, profile: ProfileType) : ThunkType  =>
    async (dispatch,getState) => {
    let response = await UserAPI.changeProfile(id, {...profile})
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(getProfile(id))
        dispatch(ProfileActions.submitWasSuccess(true))
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
export const getProfile = (userId: string | number | null) : ThunkType =>
    async (dispatch,getState) => {
    let data = await UserAPI.getUserProfile(userId)
    dispatch(ProfileActions.setProfile(data))

}
export const saveMainPhoto = (photo:any) : ThunkAction<Promise<void>, AppStateType, any, ProfileActionsType | SetCurrentUserProfileActionType>  =>
    async (dispatch,getState) => {
    dispatch(ProfileActions.isFetchingPhotoToggle())
    let data = await UserAPI.changeMainPhoto(photo)
    if (data.resultCode === ResultCodesEnum.Success){
        dispatch(ProfileActions.isFetchingPhotoToggle())
        dispatch(ProfileActions.updateProfilePhoto(data.data.photos))
        dispatch(AuthActions.SetCurrentUserProfile(data.data.photos.large))
    }
}


export default ProfileReducer;