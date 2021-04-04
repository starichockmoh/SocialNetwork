import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType, UserType} from "../../Types/Types";


type PropsType = {
    CurrentUserId: number | null
    ProfileInfo: ProfileType | null
    isFetching: boolean
    submitWasSuccess: boolean
    ProfileStatus: string

    UpdateProfileStatus: (status:string) => void
    UpdateProfileInfo: (id: number, profile: ProfileType) => void
    saveMainPhoto: (photo:any) => void
    AddNewDialog: (id: number) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (<div className={s.Profile}>
            <ProfileInfo CurrentUserId = {props.CurrentUserId}
                UpdateProfileStatus = {props.UpdateProfileStatus}
                         ProfileStatus = {props.ProfileStatus}
                         ProfileInfo={props.ProfileInfo}
                         UpdateProfileInfo = {props.UpdateProfileInfo}
                         saveMainPhoto = {props.saveMainPhoto}
                         isFetching = {props.isFetching}
                         submitWasSuccess = {props.submitWasSuccess}
                         AddNewDialog = {props.AddNewDialog}
            />
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;