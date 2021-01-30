import React from 'react';
import UserPhoto from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"


const HeaderProfile = (props) => {
    const onLogOut = () => {
        props.authLogOut()
    }
    return <div>
        <button onClick={onLogOut}>Log Out</button>
        {props.login}
        {props.CurrentUserPhoto? props.CurrentUserPhoto: <img src = {UserPhoto}/> }
    </div>
}

export default HeaderProfile;