import React from 'react';
import UserPhoto from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"
import styles from './HeaderProfile.module.css'

const HeaderProfile = (props) => {
    const onLogOut = () => {
        props.authLogOut()
    }
    return <div>
        <button onClick={onLogOut}>Log Out</button>
        <span className={styles.LoginProfileHeader}>{props.login}</span>

        {props.CurrentUserPhoto? <img src = {props.CurrentUserPhoto}/>: <img src = {UserPhoto}/> }
    </div>
}

export default HeaderProfile;