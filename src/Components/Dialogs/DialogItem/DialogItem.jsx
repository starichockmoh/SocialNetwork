import s from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = React.memo(props => {
    let id = '/dialogs/' + props.id
    let Online = (props.OnOf == 'of') ? '': <img className={s.OnOf} src= {props.OnOf}/>
    return (
        <div className={s.Dialog}><NavLink activeClassName={s.active} to={id}> <img src={props.Img} />  {props.Name} {Online} </NavLink></div>
    )
})

export default DialogItem