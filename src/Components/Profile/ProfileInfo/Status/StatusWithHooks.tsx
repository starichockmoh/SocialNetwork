import React, {ChangeEvent, useEffect, useState} from "react";
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../Redux/ReduxStore";
import {UpdateProfileStatus} from "../../../../Redux/Reducers/ProfileReducer";
import {Input} from "antd";
import {useQuery} from "react-query";
import axios from "axios";
import {UserAPI} from "../../../../Api/Api";

type PropsType = {
    IDisCurrent: boolean
}

const StatusWithHooks: React.FC<PropsType> = (props) => {




    const dispatch = useDispatch()
    let [editMode, setEditeMode] = useState(false)
    let [status, setStatus] = useState('')
    const ProfileStatus = useSelector((state: AppStateType) => state.ProfilePage.ProfileStatus)
    useEffect(()=>{
        setStatus(ProfileStatus)
    },[ProfileStatus])

    const  activeEditMode = () => {
            setEditeMode(true)
    }
    const deactiveEditMode = () => {
        setEditeMode(false)
        dispatch(UpdateProfileStatus(status))
    }
    const changeInputStatus = (e:ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
    }
    if (props.IDisCurrent){

    return <>
        {!editMode && ProfileStatus &&
        <div>
            <span onDoubleClick={activeEditMode}><span>{ProfileStatus}</span></span>
        </div>}
        {editMode &&
        <div>
            <Input onChange={changeInputStatus} autoFocus={true} onBlur={deactiveEditMode}
                    value={status}/>
        </div>}
    </>}
    else {
        return <>
            {ProfileStatus && <div>
                <span><span>{ProfileStatus}</span></span>
            </div>}

        </>
    }
}


export default StatusWithHooks