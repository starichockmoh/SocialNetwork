import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {
    let Followed = null
    if (props.activeUser) {
        if (props.activeUser[0]){
            Followed = props.activeUser[0].followed
        }
    }

    return (<div className={s.Profile}>
            <ProfileInfo CurrentUserId = {props.CurrentUserId}
                UpdateProfileStatus = {props.UpdateProfileStatus}
                         ProfileStatus = {props.ProfileStatus}
                         ProfileInfo={props.ProfileInfo}
                         UpdateProfileInfo = {props.UpdateProfileInfo}
                         saveMainPhoto = {props.saveMainPhoto}
                         isFetching = {props.isFetching}
                         submitWasSuccess = {props.submitWasSuccess}
                         FollowOrUnfollow ={props.FollowOrUnfollow}
                         Followed = {Followed}
                         AddNewDialog = {props.AddNewDialog}
            />
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;