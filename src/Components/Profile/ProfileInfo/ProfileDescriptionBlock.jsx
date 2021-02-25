import React from "react";
import s from "./ProfileInfo.module.css"
import 'antd/dist/antd.css';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import { Space, Card } from 'antd';


const ProfileDescriptionBlock = (props) => {
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
                    {Object.keys(props.ProfileInfo.contacts).map(key => <ContactsProfile key = {key} ContactTitle={key} ContactValue={props.ProfileInfo.contacts[key]}/>
                    )}
                </p>
            </Card>
        </Space>

        {/*<div>About me: {props.ProfileInfo.aboutMe}</div>*/}
        {/*<div>Full Name: {props.ProfileInfo.fullName}</div>*/}
        {/*<div>Looking For A Job: {props.ProfileInfo.lookingForAJob*/}
        {/*    ? <span>Yes*/}
        {/*        <div>LookingForAJob Description: {props.ProfileInfo.lookingForAJobDescription}</div></span>*/}
        {/*    : <span>No</span>*/}
        {/*}</div>*/}
        {/*<div className={s.contacts}>*/}
        {/*    {Object.keys(props.ProfileInfo.contacts).map(key => <ContactsProfile key = {key} ContactTitle={key} ContactValue={props.ProfileInfo.contacts[key]}/>*/}
        {/*    )}*/}
        {/*</div>*/}
    </div>
}

const ContactsProfile = ({ContactTitle, ContactValue}) => {
    return <div>
        {ContactValue && <>{ContactTitle}: <a href={ContactValue}> {ContactValue}</a></>}
    </div>
}

export default ProfileDescriptionBlock