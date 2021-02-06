import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileDescriptionBlock = (props) => {
    return  <div className={s.DescriptionBlock}>
        {props.IDisCurrent && <button onClick={props.activateMode}>change profile</button>}
        <div>About me: {props.ProfileInfo.aboutMe}</div>
        <div>Full Name: {props.ProfileInfo.fullName}</div>
        <div>Looking For A Job: {props.ProfileInfo.lookingForAJob
            ? <span>Yes
                <div>LookingForAJob Description: {props.ProfileInfo.lookingForAJobDescription}</div></span>
            : <span>No</span>
        }</div>
        <div className={s.contacts}>
            {Object.keys(props.ProfileInfo.contacts).map(key => <ContactsProfile key = {key} ContactTitle={key} ContactValue={props.ProfileInfo.contacts[key]}/>
            )}
        </div>
    </div>
}

const ContactsProfile = ({ContactTitle, ContactValue}) => {
    return <div>
        {ContactValue && <>{ContactTitle}: <a href={ContactValue}> {ContactValue}</a></>}
    </div>
}

export default ProfileDescriptionBlock