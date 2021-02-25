import React from "react";
import s from './UserElement.module.css'
import userPhoto
    from '../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg'
import {NavLink} from "react-router-dom";


const UserElement = React.memo(({user,followIsProgressing,FollowOrUnfollow, isFriend}) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.UserPhoto} src={user.photos.large === null ? userPhoto : user.photos.large}/>
                </NavLink>
            </div>
            <div>
                {(user.followed)
                    ? <button disabled={followIsProgressing.some(id => id === user.id)}
                        onClick={() => {FollowOrUnfollow(user.id,false,isFriend)}}>Unfollow</button>

                    : <button disabled={followIsProgressing.some(id => id === user.id)}
                        onClick={() => {FollowOrUnfollow(user.id,true,isFriend)}}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div> {user.status}</div>
            </span>
        </span>
    </div>
})


export default UserElement
