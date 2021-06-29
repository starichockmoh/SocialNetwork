import React from 'react';
import UserPhoto from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"
import styles from './HeaderProfile.module.css'
import {Avatar, Button} from "antd";
import {LogoutOutlined} from "@ant-design/icons";

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
        <Button icon={<LogoutOutlined/>} onClick={onLogOut}>Log Out</Button>
        <span className={styles.LoginProfileHeader}>{props.login}</span>

        {props.CurrentUserPhoto
            ? <Avatar style={{width: 50, height: 50}} src = {props.CurrentUserPhoto} alt = ''/>
            : <Avatar src = {UserPhoto} alt = ''/> }
    </div>
}

export default HeaderProfile;