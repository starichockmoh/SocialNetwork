import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import UserPhoto
    from "../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"
import StatusWithHooks from "./Status/StatusWithHooks";
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileDescriptionBlock from "./ProfileDescriptionBlock";


const ProfileInfo = (props) => {

    let [ProfileEditMode, setProfileEditeMode] = useState(false)
    let activateMode = () => {
        setProfileEditeMode(true)
    }
    let deactivateMode = () => {
        setProfileEditeMode(false)
    }
    let changeProfile = (data) => {
            props.UpdateProfileInfo(props.CurrentUserId,
                data.ProfileAboutMeInput,
                data.ProfileLookingForAJobInput,
                data.ProfileLookingForAJobDescriptionInput,
                data.ProfileNameInput,
            )
        deactivateMode()
    }
    if (!props.ProfileInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <div><img className={s.img1}
                      src={props.ProfileInfo.photos.large ? props.ProfileInfo.photos.large : UserPhoto}/>
            </div>
            <div><StatusWithHooks UpdateProfileStatus={props.UpdateProfileStatus}
                         ProfileStatus={props.ProfileStatus}
                         CurrentUserId = {props.CurrentUserId}
                         userId = {props.ProfileInfo.userId}
            />
            </div>
            {props.ProfileInfo.userId === props.CurrentUserId && !ProfileEditMode && <button onClick={activateMode}>Change profile</button>}
            {ProfileEditMode ? <ProfileInfoForm onSubmit={changeProfile}/> :
                <ProfileDescriptionBlock ProfileInfo={props.ProfileInfo}/>
            }
        </div>
    )
}


export default ProfileInfo