import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import UserPhoto
    from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"
import StatusWithHooks from "./Status/StatusWithHooks";
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileDescriptionBlock from "./ProfileDescriptionBlock";
import ProfilePhotoInputFile from "./FileInputs/ProfilePhotoInputFile";
import {useDispatch} from "react-redux";
import {submitWasSuccess} from "../../../Redux/Reducers/ProfileReducer";
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import AvatarInput from "./FileInputs/AvatarInput";
import {ProfileType} from "../../../Types/Types";
import {FormSubmitHandler} from "redux-form";

type PropsType = {
    CurrentUserId: number | null
    ProfileInfo: ProfileType | null
    isFetching: boolean
    submitWasSuccess: boolean
    ProfileStatus: string

    UpdateProfileStatus: (status: string) => void
    UpdateProfileInfo: (id: number, profile: ProfileType) => void
    saveMainPhoto: (photo: any) => void
    AddNewDialog: (id: number) => void
}
const ProfileInfo: React.FC<PropsType> = (props) => {
    let DialogUrl: string = props.ProfileInfo? '/dialogs/' + props.ProfileInfo.userId: ''
    let dispatch = useDispatch()
    useEffect(() => {
        if (props.submitWasSuccess) {
            deactivateMode()
            dispatch(submitWasSuccess(false))
        }
    }, [props.submitWasSuccess, dispatch])
    let [ProfileEditMode, setProfileEditeMode] = useState(false)
    let [isShowUploadButton, setUploadButtonState] = useState(false)
    let activateMode = () => {
        setProfileEditeMode(true)
    }
    let deactivateMode = () => {
        setProfileEditeMode(false)
    }
    let changeProfile = (data: any) => {
        if (props.CurrentUserId !== null) {
            props.UpdateProfileInfo(props.CurrentUserId, data)
        }

    }
    const onMainPhotoSelected = (e: any) => {
        if (e.file) {
            props.saveMainPhoto(e.file)
        }
    }
    const startDialog = () => {
        if (props.ProfileInfo !== null) {
            props.AddNewDialog(props.ProfileInfo.userId)
        }

    }
    if (!props.ProfileInfo) {
        return <Preloader/>
    }
    const IDisCurrent: boolean = props.ProfileInfo.userId === props.CurrentUserId
    return (
        <div>
            <div onMouseMove={() => {
                setUploadButtonState(true)
            }}
                 onMouseLeave={() => {
                     setUploadButtonState(false)
                 }}
            >
                {ProfileEditMode
                    ? <AvatarInput
                        IDisCurrent={IDisCurrent}
                        avatar={props.ProfileInfo.photos.large ? props.ProfileInfo.photos.large : UserPhoto}
                        onMainPhotoSelected={onMainPhotoSelected}/>
                    : props.isFetching ? <Preloader/> :
                        <div>
                            <img className={s.img1} alt='avatar'
                                 src={props.ProfileInfo.photos.large ? props.ProfileInfo.photos.large : UserPhoto}/>
                        </div>
                }
                {IDisCurrent && !ProfileEditMode && isShowUploadButton &&
                <div className={s.inputButton}>
                    <ProfilePhotoInputFile onMainPhotoSelected={onMainPhotoSelected}/>
                </div>
                }
            </div>

            <div className={s.statusBlock}>
                <StatusWithHooks UpdateProfileStatus={props.UpdateProfileStatus} ProfileStatus={props.ProfileStatus}
                                 IDisCurrent={IDisCurrent}/>
            </div>

            <NavLink to={DialogUrl}>
                {!IDisCurrent && <Button onClick={startDialog}>Start dialog</Button>}
            </NavLink>

            {ProfileEditMode
                ? <>
                    <ProfileInfoForm initialValues={props.ProfileInfo} onSubmit={changeProfile}/>
                    <Button onClick={deactivateMode}> Escape </Button>
                </>
                : <ProfileDescriptionBlock IDisCurrent={IDisCurrent} activateMode={activateMode}
                                           ProfileInfo={props.ProfileInfo}/>
            }
        </div>
    )
}


export default ProfileInfo