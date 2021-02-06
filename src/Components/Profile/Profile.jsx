import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (<div className={s.Profile}>
            <ProfileInfo CurrentUserId = {props.CurrentUserId}
                UpdateProfileStatus = {props.UpdateProfileStatus}
                         ProfileStatus = {props.ProfileStatus}
                         ProfileInfo={props.ProfileInfo}
                         UpdateProfileInfo = {props.UpdateProfileInfo}
                         saveMainPhoto = {props.saveMainPhoto}
                         isFetching = {props.isFetching}
                         submitWasSuccess = {props.submitWasSuccess}
            />
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;