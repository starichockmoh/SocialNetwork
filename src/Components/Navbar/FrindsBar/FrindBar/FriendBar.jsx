import React from "react";
import s from './FriendBar.module.css'
import {NavLink} from "react-router-dom";

const FriendBar = (props) => {
    let id = '/friends/' + props.id;
    let Online = (props.OnOf == 'of') ? '': <img className={s.OnOf} src= {props.OnOf}/>
    return (
        <div className={s.FriendBar}>
            <img src= {props.Img}/>
            <NavLink activeClassName={s.active} to={id}> {props.Name} {Online} </NavLink>
        </div>
    )
}

export default FriendBar