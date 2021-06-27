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
        {props.IDisCurrent && <Button type={"link"} onClick={props.activateMode}> Change profile </Button>}
        </div>
        <Space direction="vertical">
            <Card title="Profile Info" style={{ width: 500, fontSize: 20 }} className={s.DescriptionCard}>
                <p><b>About me</b> &nbsp; {props.ProfileInfo.aboutMe}</p>
                <hr/>
                <p><b>Full Name</b> &nbsp; {props.ProfileInfo.fullName}</p>
                <hr/>
                <p><b>Looking Job?</b> &nbsp; {props.ProfileInfo.lookingForAJob
                    ?
                    <>Yes
                        <p><b>Skills</b> &nbsp; {props.ProfileInfo.lookingForAJobDescription}</p>
                    </>
                    : <span>No</span>
                }</p>
                <hr/>
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