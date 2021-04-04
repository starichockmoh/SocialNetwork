import s from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto
    from '../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg'

type PropsType = {
    id: number
    UserId: string
    photo: string | null
    name: string

}

const DialogItem: React.FC<PropsType> = React.memo(props => {
    let UserDialogUrl: string = '/dialogs/' + props.id
    let UserProfileUrl: string = '/profile/' + props.id
    return (
        <div>
            <div className={props.id == Number(props.UserId)? s.DialogActive:s.Dialog}>
                <NavLink to={UserProfileUrl}>
                <img className={s.DialogImg} src={props.photo === null ? userPhoto : props.photo}/>
            </NavLink>
                <NavLink to={UserDialogUrl}>
                    <span >{props.name}</span>
                </NavLink>
            </div>
        </div>
    )

})

export default DialogItem