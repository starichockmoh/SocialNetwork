import React, {FC} from "react";
import s from './UserElement.module.css'
import userPhoto
    from '../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg'
import {NavLink} from "react-router-dom";
import {UserType} from "../../../Types/Types";
import {Avatar, Button} from "antd";

type PropsType = {
    user: UserType
    followIsProgressing: Array<Number>
    FollowOrUnfollow: (userId:number,follow:boolean,isFriend:boolean) => void
    isFriend?: boolean
}


const UserElement: FC<PropsType> = ({user,followIsProgressing,FollowOrUnfollow, isFriend= false}) => {
    return <li className={s.UserElement}>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <Avatar className={s.UserPhoto} src={user.photos.large === null ? userPhoto : user.photos.large} alt={''}/>
                </NavLink>
            </div>
            <div>
                {(user.followed)
                    ? <Button disabled={followIsProgressing.some(id => id === user.id)}
                        onClick={() => {FollowOrUnfollow(user.id,false, isFriend)}}>Unfollow</Button>

                    : <Button disabled={followIsProgressing.some(id => id === user.id)}
                        onClick={() => {FollowOrUnfollow(user.id,true, isFriend)}}>Follow</Button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div> {user.status}</div>
            </span>
        </span>
    </li>
}

export default UserElement
