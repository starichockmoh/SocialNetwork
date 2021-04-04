import React, {ChangeEvent, useEffect, useState} from "react";
import 'antd/dist/antd.css';

type PropsType = {
    ProfileStatus: string
    IDisCurrent: boolean
    UpdateProfileStatus: (status:string) => void
}

const StatusWithHooks: React.FC<PropsType> = (props) => {
    let [editMode, setEditeMode] = useState(false)
    let [status, setStatus] = useState('')

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
    const changeInputStatus = (e:ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
    }
    if (props.IDisCurrent){

    return <>
        {!editMode && props.ProfileStatus &&
        <div>
            <span onDoubleClick={activeEditMode}><span>{props.ProfileStatus}</span></span>
        </div>}
        {editMode &&
        <div>
            <input onChange={changeInputStatus} autoFocus={true} onBlur={deactiveEditMode}
                    value={status}/>
        </div>}
    </>}
    else {
        return <>
            {props.ProfileStatus && <div>
                <span><span>{props.ProfileStatus}</span></span>
            </div>}

        </>
    }
}


export default StatusWithHooks