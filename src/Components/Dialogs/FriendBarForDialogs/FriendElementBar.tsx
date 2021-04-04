import React, {Props, useState} from "react";
import styles from './FriendBarForDialog.module.css'
import userPhoto
    from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../Types/Types";

type PropsType = {
    AddNewDialog: (id: number) => void
    userInfo: UserType
}

const FriendElementBar: React.FC<PropsType> = ({userInfo,AddNewDialog}) => {
    const StartDialogWithFriend = () => {
        AddNewDialog(userInfo.id)
    }
    let DialogUrl:string = userInfo && '/dialogs/' + userInfo.id
    let [ActiveBarFriend, setActiveBarFried] = useState(false)
    return <div onMouseMove={() => {setActiveBarFried(true)}}
                onMouseLeave={() => {setActiveBarFried(false)}}
                className={ActiveBarFriend? styles.ActiveFriend: styles.Friend}>
        <NavLink to={DialogUrl}>
        <span onClick={StartDialogWithFriend} className={styles.FriendInfo}>
        <img alt = '' src={!userInfo.photos.large? userPhoto : userInfo.photos.large}/> {userInfo.name}
        </span>
        </NavLink>
    </div>
}

export default FriendElementBar