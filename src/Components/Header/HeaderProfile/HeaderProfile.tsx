import React from 'react';
import UserPhoto from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"
import styles from './HeaderProfile.module.css'

type PropsType = {
    login: string | null
    CurrentUserPhoto:  string | null

    authLogOut: () => void
}
const HeaderProfile: React.FC<PropsType> = (props) => {
    const onLogOut = () => {
        props.authLogOut()
    }
    return <div>
        <button onClick={onLogOut}>Log Out</button>
        <span className={styles.LoginProfileHeader}>{props.login}</span>

        {props.CurrentUserPhoto
            ? <img src = {props.CurrentUserPhoto} alt = ''/>
            : <img src = {UserPhoto} alt = ''/> }
    </div>
}

export default HeaderProfile;