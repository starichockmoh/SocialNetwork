import s from "../Dialogs.module.css";
import React from "react";

const Message = React.memo(props => {
    return (<div className={s.Message}>{props.message}</div>
    )
})

export default Message