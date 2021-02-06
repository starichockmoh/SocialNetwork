import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import UserPhoto
    from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"
import StatusWithHooks from "./Status/StatusWithHooks";
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileDescriptionBlock from "./ProfileDescriptionBlock";
import ProfilePhotoInputFile from "./ProfilePhotoInputFile";
import {useDispatch} from "react-redux";
import {submitWasSuccess} from "../../../Redux/Reducers/ProfileReducer";


const ProfileInfo = (props) => {
    let dispatch = useDispatch()
    useEffect(() => {
        if (props.submitWasSuccess){
            deactivateMode()
            dispatch(submitWasSuccess(false))
        }
    }, [props.submitWasSuccess,dispatch])
    let [ProfileEditMode, setProfileEditeMode] = useState(false)
    let activateMode = () => {
        setProfileEditeMode(true)
    }
    let deactivateMode = () => {
        setProfileEditeMode(false)
    }
    let changeProfile = (data) => {
        props.UpdateProfileInfo(props.CurrentUserId, data)
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.saveMainPhoto(e.target.files[0])
        }
    }
    if (!props.ProfileInfo) {
        return <Preloader/>
    }
    const IDisCurrent = props.ProfileInfo.userId === props.CurrentUserId
    return (
        <div>
            {props.isFetching ? <Preloader/> :
                <div><img className={s.img1}
                          src={props.ProfileInfo.photos.large ? props.ProfileInfo.photos.large : UserPhoto}/>
                </div>}
            {IDisCurrent &&
            <div className={s.inputButton}>
                <ProfilePhotoInputFile onMainPhotoSelected={onMainPhotoSelected}/>
            </div>
            }
            <div>
                <StatusWithHooks UpdateProfileStatus={props.UpdateProfileStatus} ProfileStatus={props.ProfileStatus} IDisCurrent={IDisCurrent}/>
            </div>
            {ProfileEditMode
                ? <ProfileInfoForm initialValues={props.ProfileInfo} deactivateMode={deactivateMode} onSubmit={changeProfile}/>
                : <ProfileDescriptionBlock IDisCurrent = {IDisCurrent} activateMode ={activateMode} ProfileInfo={props.ProfileInfo}/>
            }
        </div>
    )
}



export default ProfileInfo