import s from "../ProfileInfo.module.css";
import React from "react";
import 'antd/dist/antd.css';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const ProfilePhotoInputFile = (props) => {
    const Sprops = {
        showUploadList: false,
        customRequest(info){
            props.onMainPhotoSelected(info)
        },
    };
    return <div className={s.input__wrapper}>
        <Upload {...Sprops}>
            <Button  icon={<UploadOutlined />}>Change avatar</Button>
        </Upload>
    </div>
}

export default ProfilePhotoInputFile