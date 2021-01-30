import React, {useEffect, useState} from "react";


const StatusWithHooks = (props) => {
    let [editMode, setEditeMode] = useState(false)
    let [status, setStatus] = useState(props.ProfileStatus)

    useEffect(()=>{
        setStatus(props.ProfileStatus)
    },[props.ProfileStatus])

    const  activeEditMode = () => {
            setEditeMode(true)
    }
    const deactiveEditMode = () => {
        setEditeMode(false)
        props.UpdateProfileStatus(status)
    }
    const changeInputStatus = (e) => {
            setStatus(e.currentTarget.value)
    }
    if (props.CurrentUserId === props.userId){

    return <>
        {!editMode &&
        <div><span onDoubleClick={activeEditMode}>Status: <span>{props.ProfileStatus}</span></span></div>}
        {editMode &&
        <div><input onChange={changeInputStatus} autoFocus={true} onBlur={deactiveEditMode}
                    value={status}/></div>}
    </>}
    else {
        return <>
            <div><span>Status: <span>{props.ProfileStatus}</span></span></div>
        </>
    }
}


export default StatusWithHooks