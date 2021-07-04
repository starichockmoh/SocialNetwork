import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css";
import {PageHeader} from "antd";
import StatusWithHooks from "./Status/StatusWithHooks";
import {ProfileType} from "../../../Types/Types";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";


type ContactsProfilePropsType = {
    ContactTitle: string
    ContactValue: string
}
export const ContactsProfile: React.FC<ContactsProfilePropsType> = ({ContactTitle, ContactValue}) => {
    return <div>
        {ContactValue && <div className={s.Contacts}>{ContactTitle}: &nbsp;
            <a href={ContactValue}>
                @{ContactValue.split('/')[ContactValue.split('/').length - 1]}
            </a></div>}
    </div>
}

type ProfileDescriptionType = {
    fullName: string
    aboutMe: string
    IDisCurrent: boolean
}
export const ProfileDescription: React.FC<ProfileDescriptionType> = ({fullName, aboutMe, IDisCurrent}) => {
    const FriendsCount = useSelector((state: AppStateType) => state.UsersPage.totalFriendsCount)
    return <div className={s.Description}>
        <PageHeader title={fullName} subTitle={'Rus, Saratov'}/>
        <div className={s.StatusBlock}>
            <hr/>
            <StatusWithHooks IDisCurrent={IDisCurrent}/>
        </div>
        <div className={s.FriendCountBlock}>
            Friends:  &nbsp; {FriendsCount}
        </div>
        <div className={s.AboutMe}>
            <div className={s.AboutMeTitle}>My Phone:</div>
            <div className={s.AboutMeData}> +375 (33) 355-29-98</div>
            <div className={s.AboutMeTitle}> Date of birth:</div>
            <div className={s.AboutMeData}> 24 April 20001</div>
            <div className={s.AboutMeTitle}> Abot me:</div>
            <div className={s.AboutMeData}> {aboutMe} </div>
        </div>
    </div>
}

export const ProfileAdDescription: React.FC<{ ProfileInfo: ProfileType }> = ({ProfileInfo}) => {
    return <div className={s.AdInfo}>
        <div style={{width: 200, marginLeft: 10}}>
            <PageHeader title={'Additional Info'}/>
            <hr className={s.AdInfoLine}/>
        </div>
        <div className={s.AdInfoBlock}>
            <div>
                <h1> Contacts </h1>
                {Object.keys(ProfileInfo.contacts).map((k) => <ContactsProfile key={k}
                                                                               ContactTitle={k}
                                                                               ContactValue={ProfileInfo.contacts[k]}/>)}
            </div>
            <div className={s.AdditAboutMe}>
                <div className={s.AboutMeTitle}>Looking Job?</div>
                {ProfileInfo.lookingForAJob
                    ? <div className={s.AboutMeData}>Yes</div>
                    : <div className={s.AboutMeData}>No</div>}

                <div className={s.AboutMeTitle}>Skills:</div>
                <div className={s.AboutMeData}>{ProfileInfo.lookingForAJobDescription}</div>
            </div>
        </div>
    </div>
}