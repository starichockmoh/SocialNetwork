import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {ProfileActions, saveMainPhoto, UpdateProfileInfo} from "../../../Redux/Reducers/ProfileReducer";
import 'antd/dist/antd.css';
import {Button, Image} from 'antd';
import {AppStateType} from "../../../Redux/ReduxStore";
import {AddNewDialog} from "../../../Redux/Reducers/DialogsReducer";
import {CloseOutlined, EditOutlined} from "@ant-design/icons";
import ProfilePhotoInputFile from "./FileInputs/ProfilePhotoInputFile";
import {ProfileAdDescription, ProfileDescription} from "./ProfileDescriptionBlock";
import {NavLink} from "react-router-dom";
import UserAvatar
    from "./../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"
import ProfileInfoForm from "./ProfileInfoForm";


const ProfileInfo: React.FC = () => {
    const ProfileInfo = useSelector((state: AppStateType) => state.ProfilePage.ProfileInfo)
    const submitWasSuccess = useSelector((state: AppStateType) => state.ProfilePage.submitWasSuccess)
    const CurrentUserId = useSelector((state: AppStateType) => state.Auth.CurrentUserId)
    const DialogUrl: string = ProfileInfo ? '/dialogs/' + ProfileInfo.userId : ''
    const dispatch = useDispatch()

    useEffect(() => {
        if (submitWasSuccess) {
            setProfileEditMode(false)
            dispatch(ProfileActions.submitWasSuccess(false))
        }
    }, [submitWasSuccess, dispatch])

    let [ProfileEditMode, setProfileEditMode] = useState(false)
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
    return <div className={s.ProfileInfo}>
        <div className={s.Avatar}>
            <div><Image style={{width: 250}} src={ProfileInfo.photos.large ? ProfileInfo.photos.large : UserAvatar}/></div>
        </div>
        <ProfileDescription aboutMe={ProfileInfo.aboutMe} fullName={ProfileInfo.fullName} IDisCurrent={IDisCurrent}/>
        <div className={s.Button1}>
            {IDisCurrent
                ? <div><ProfilePhotoInputFile onMainPhotoSelected={onMainPhotoSelected}/></div>
                : <NavLink to={DialogUrl}><Button icon={<EditOutlined/>} onClick={startDialog}> Start Dialog </Button></NavLink>}
        </div>
        <div className={s.Button2}>
            {IDisCurrent ? ProfileEditMode?
                <div><Button style={{width: 250}} onClick={() => setProfileEditMode(false)} icon={<CloseOutlined />}> Close </Button></div>:
                <div><Button style={{width: 250}} onClick={() => setProfileEditMode(true)} icon={<EditOutlined/>}> Change Profile</Button></div>:null}
        </div>
        {ProfileEditMode? <ProfileInfoForm initialValues={ProfileInfo} onSubmit={changeProfile}/> : <ProfileAdDescription ProfileInfo={ProfileInfo}/>}

    </div>
}


export default ProfileInfo