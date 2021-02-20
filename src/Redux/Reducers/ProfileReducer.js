import {UserAPI} from "../../Api/Api";
import {SetCurrentUserProfile} from "./AuthReducer";
import {stopSubmit} from "redux-form";
import {HelperStopSubmit} from "../../Utils/HelperStopSubmit";


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
    ],
    ProfileInfo: null,
    ProfileStatus: '',
    isFetching: false,
    submitWasSuccess: false
}


const ProfileReducer = (state = InitialState, action) => {
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
                ProfileInfo: {...state.ProfileInfo,photos: {...action.photo}},
            }
        case PROFILE_IS_FETCHING_PHOTO_TOGGLE:{
            return {
                ...state,
                isFetching: !state.isFetching
            }
        }
        default:
            return state
    }
}

export const deleteProfilePost = (postId) => ({type: PROFILE_DELETE_POST, postId})
export const submitWasSuccess = (success) => ({type: SUBMIT_WAS_SUCCESS, success})
export const addNewPost = (post) => ({type: PROFILE_ADD_POST, post})
export const setProfile = (ProfileInfo) => ({type: PROFILE_SET_PROFILE, ProfileInfo})
export const setProfileStatus = (status) => ({type: PROFILE_SET_PROFILE_STATUS, status})
const updateProfilePhoto = (photo) => ({type: PROFILE_UPDATE_PHOTO, photo})
const isFetchingPhotoToggle = () => ({type: PROFILE_IS_FETCHING_PHOTO_TOGGLE})

export const getProfileStatus = (userId) => async (dispatch) => {
    let response = await UserAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(response))

}
export const UpdateProfileStatus = (status) => async (dispatch) => {
    // try {
        let response = await UserAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    // } catch (error){
    //     console.log(error)
    // }

}
export  const UpdateProfileInfo = (id, profile) => async (dispatch) => {
    let response = await UserAPI.changeProfile(id, {...profile})
    if (response.resultCode === 0) {
        dispatch(getProfile(id))
        dispatch(submitWasSuccess(true))
    }
    else {
        let errorMessages = response.messages.length > 0 ? response.messages : 'Some error'
        dispatch(stopSubmit('ProfileInfoInput', {'contacts' : {...HelperStopSubmit(errorMessages)}}))
    }

}
export const getProfile = (userId) => async (dispatch) => {
    let response = await UserAPI.getUserProfile(userId)
    dispatch(setProfile(response))

}
export const saveMainPhoto = (photo) => async (dispatch) => {
    dispatch(isFetchingPhotoToggle())
    let response = await UserAPI.changeMainPhoto(photo)
    if (response.data.resultCode === 0){
        dispatch(isFetchingPhotoToggle())
        dispatch(updateProfilePhoto(response.data.data.photos))
        dispatch(SetCurrentUserProfile(response.data.data.photos.large))
    }
}

export default ProfileReducer;