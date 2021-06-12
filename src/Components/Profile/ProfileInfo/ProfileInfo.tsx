import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import UserPhoto
    from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"
import StatusWithHooks from "./Status/StatusWithHooks";
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileDescriptionBlock from "./ProfileDescriptionBlock";
import ProfilePhotoInputFile from "./FileInputs/ProfilePhotoInputFile";
import {useDispatch, useSelector} from "react-redux";
import {ProfileActions, saveMainPhoto, UpdateProfileInfo} from "../../../Redux/Reducers/ProfileReducer";
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import AvatarInput from "./FileInputs/AvatarInput";
import {AppStateType} from "../../../Redux/ReduxStore";
import {AddNewDialog} from "../../../Redux/Reducers/DialogsReducer";

const ProfileInfo: React.FC = () => {
    const ProfileInfo = useSelector((state: AppStateType) => state.ProfilePage.ProfileInfo)

    const isFetching = useSelector((state: AppStateType) => state.ProfilePage.isFetching)
    const submitWasSuccess = useSelector((state: AppStateType) =>  state.ProfilePage.submitWasSuccess)
    const CurrentUserId = useSelector((state: AppStateType) => state.Auth.CurrentUserId)
    const DialogUrl: string = ProfileInfo? '/dialogs/' + ProfileInfo.userId: ''
    const dispatch = useDispatch()


    useEffect(() => {
        if (submitWasSuccess) {
            deactivateMode()
            dispatch(ProfileActions.submitWasSuccess(false))
        }
    }, [submitWasSuccess, dispatch])

    let [ProfileEditMode, setProfileEditeMode] = useState(false)
    let [isShowUploadButton, setUploadButtonState] = useState(false)

    let activateMode = () => {
        setProfileEditeMode(true)
    }
    let deactivateMode = () => {
        setProfileEditeMode(false)
    }
    let changeProfile = (data: any) => {
        if (CurrentUserId !== null) {
            dispatch(UpdateProfileInfo(CurrentUserId, data))
        }

    }
    const onMainPhotoSelected = (e: any) => {
        if (e.file) {
            dispatch(saveMainPhoto(e.file))
        }
    }
    const startDialog = () => {
        if (ProfileInfo !== null) {
            dispatch(AddNewDialog(ProfileInfo.userId))
        }
    }

    if (!ProfileInfo) {
        return <Preloader/>
    }

    const IDisCurrent: boolean = ProfileInfo.userId === CurrentUserId

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
                        avatar={ProfileInfo.photos.large ? ProfileInfo.photos.large : UserPhoto}
                        onMainPhotoSelected={onMainPhotoSelected}/>
                    : isFetching ? <Preloader/> :
                        <div>
                            <img className={s.img1} alt='avatar'
                                 src={ProfileInfo.photos.large ? ProfileInfo.photos.large : UserPhoto}/>
                        </div>
                }
                {IDisCurrent && !ProfileEditMode && isShowUploadButton &&
                <div className={s.inputButton}>
                    <ProfilePhotoInputFile onMainPhotoSelected={onMainPhotoSelected}/>
                </div>
                }
            </div>

            <div className={s.statusBlock}>
                <StatusWithHooks IDisCurrent={IDisCurrent}/>
            </div>

            <NavLink to={DialogUrl}>
                {!IDisCurrent && <Button onClick={startDialog}>Start dialog</Button>}
            </NavLink>

            {ProfileEditMode
                ? <>
                    <ProfileInfoForm initialValues={ProfileInfo} onSubmit={changeProfile}/>
                    <Button onClick={deactivateMode}> Escape </Button>
                </>
                : <ProfileDescriptionBlock IDisCurrent={IDisCurrent} activateMode={activateMode}
                                           ProfileInfo={ProfileInfo}/>
            }
        </div>
    )
}


export default ProfileInfo