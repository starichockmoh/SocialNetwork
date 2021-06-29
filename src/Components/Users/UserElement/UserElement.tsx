import React, {FC} from "react";
import s from './UserElement.module.css'
import userPhoto
    from '../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg'
import {NavLink} from "react-router-dom";
import {UserType} from "../../../Types/Types";
import {Avatar, Button} from "antd";
import Rus from './../../../accepts/images/1615023361_preview_911308-russian-flag-wallpapers-2000x1333-htc.jpg'
import {UserAddOutlined,UserDeleteOutlined} from "@ant-design/icons";

type PropsType = {
    user: UserType
    followIsProgressing: Array<Number>
    FollowOrUnfollow: (userId:number,follow:boolean,isFriend:boolean) => void
    isFriend?: boolean
}


const UserElement: FC<PropsType> = ({user,followIsProgressing,FollowOrUnfollow, isFriend= false}) => {
    return <div className={s.UserElement}>
        <div>
                <NavLink to={'/profile/' + user.id}>
                    <Avatar className={s.UserPhoto} src={user.photos.large === null ? userPhoto : user.photos.large} alt={''}/>
                </NavLink>

        </div>
        <div>
            <div className = {s.Location}> <Avatar style={{width: 18, height:18}} src = {Rus}/> Rus, Saratov</div>
            <div>{user.name}</div>
        </div>
        <div>
            {(user.followed)
                ? <Button icon={<UserDeleteOutlined />} disabled={followIsProgressing.some(id => id === user.id)}
                          onClick={() => {FollowOrUnfollow(user.id,false, isFriend)}}>Unfollow</Button>

                : <Button icon={<UserAddOutlined />} disabled={followIsProgressing.some(id => id === user.id)}
                          onClick={() => {FollowOrUnfollow(user.id,true, isFriend)}}>Follow</Button>}
        </div>
    </div>
}

export default UserElement
