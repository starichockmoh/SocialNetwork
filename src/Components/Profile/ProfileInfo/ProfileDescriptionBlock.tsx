import React from "react";
import s from "./ProfileInfo.module.css"
import 'antd/dist/antd.css';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import { Space, Card } from 'antd';
import {ProfileType} from "../../../Types/Types";

type PropsType = {
    activateMode: () => void
    IDisCurrent: boolean
    ProfileInfo: ProfileType

}
const ProfileDescriptionBlock: React.FC<PropsType> = (props) => {
    return  <div className={s.DescriptionBlock}>
        <div>
        {props.IDisCurrent && <Button onClick={props.activateMode}> Change profile </Button>}
        </div>
        <Space direction="vertical">
            <Card title="Info" style={{ width: 300 }}>
                <p>About me: {props.ProfileInfo.aboutMe}</p>
                <p>Full Name: {props.ProfileInfo.fullName}</p>
                <p>Looking For A Job: {props.ProfileInfo.lookingForAJob
                    ? <span>Yes
                <p>LookingForAJob Description: {props.ProfileInfo.lookingForAJobDescription}</p></span>
                    : <span>No</span>
                }</p>
                <p className={s.contacts}>
                    <h5> Contacts </h5>
                    {Object.keys(props.ProfileInfo.contacts).map((k) => <ContactsProfile key = {k}
                                                                                                  ContactTitle={k}
                                                                                                  ContactValue={props.ProfileInfo.contacts[k]}/>
                    )}
                </p>
            </Card>
        </Space>
    </div>
}

type ContactsProfilePropsType = {
    ContactTitle: string
    ContactValue: string
}
const ContactsProfile: React.FC<ContactsProfilePropsType> = ({ContactTitle, ContactValue}) => {
    return <div>
        {ContactValue && <>{ContactTitle}: <a href={ContactValue}> {ContactValue}</a></>}
    </div>
}

export default ProfileDescriptionBlock