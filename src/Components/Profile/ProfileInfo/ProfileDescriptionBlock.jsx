import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileDescriptionBlock = (props) => {
    return  <div className={s.DescriptionBlock}>
        <div>About me: {props.ProfileInfo.aboutMe}</div>
        <div>Full Name: {props.ProfileInfo.fullName}</div>
        <div>Looking For A Job: {props.ProfileInfo.lookingForAJob ? <span>Yes</span> : <span>No</span>}</div>
        <div>LookingForAJob Description: {props.ProfileInfo.lookingForAJobDescription}</div>
        <div className={s.contacts}>
            <div>{props.ProfileInfo.contacts.facebook}</div>
            <div>{props.ProfileInfo.contacts.vk}</div>
            <div>{props.ProfileInfo.contacts.github}</div>
            <div>{props.ProfileInfo.contacts.instagram}</div>
            <div>{props.ProfileInfo.contacts.twitter}</div>
            <div>{props.ProfileInfo.contacts.website}</div>
            <div>{props.ProfileInfo.contacts.youtube}</div>
            <div>{props.ProfileInfo.contacts.mainLink}</div>
        </div>
    </div>
}

export default ProfileDescriptionBlock