import {UserAPI} from "../../Api/Api";

const ADD_POST = 'ADD_PROFILE_POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const DELETE_POST = 'DELETE_PROFILE_POST'
const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO'




let InitialState = {
    PostsData: [
        {message: 'Heil Hitler', id: 1, likecount: 1488},
        {message: 'salam', id: 2, likecount: 228},
    ],
    ProfileInfo: null,
    ProfileStatus: ''

}


const ProfileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case DELETE_POST: {
            return {
                ...state,
                PostsData: state.PostsData.filter(u => u.id !== action.postId)
            }
        }

        case ADD_POST: {
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
        case SET_PROFILE:
            return {
                ...state,
                ProfileInfo: action.ProfileInfo
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                ProfileStatus: action.status
            }
        default:
            return state
    }
}

export const deleteProfilePost = (postId) => ({type: DELETE_POST, postId})
export const addNewPost = (post) => ({type: ADD_POST, post})
export const setProfile = (ProfileInfo) => ({type: SET_PROFILE, ProfileInfo})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})


export const getProfileStatus = (userId) => async (dispatch) => {
    let response = await UserAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(response))

}
export const UpdateProfileStatus = (status) => async (dispatch) => {
    let response = await UserAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}
export  const UpdateProfileInfo = (userId,AboutMe,lookingForAJob,lookingForAJobDescription,fullName,contacts=null) => async (dispatch) => {
    let response = await UserAPI.changeProfile(userId,AboutMe,lookingForAJob,lookingForAJobDescription,fullName,contacts)
    if (response.resultCode === 0) {
        dispatch(getProfile(userId))
    }

}
export const getProfile = (userId) => async (dispatch) => {
    let response = await UserAPI.getUserProfile(userId)
    dispatch(setProfile(response))

}

export default ProfileReducer;