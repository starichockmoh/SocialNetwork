import s from "../ProfileInfo.module.css";
import React, {useState} from "react";
import 'antd/dist/antd.css';
import {Upload, Button} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import UserPhoto
    from "../../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg";


const AvatarInput = (props) => {
    let [isFileLoading, setFileLoadingState] = useState(false)
    const Sprops = {
        onChange(info){
            if (info.file.status === 'uploading'){
                setFileLoadingState(true)
            }
        },
        showUploadList: false,
        customRequest(info) {
            props.onMainPhotoSelected(info)
            setTimeout(() => {setFileLoadingState(false)},2000)
        },
    };

    return <div>
                <Upload {...Sprops}
                          name="avatar"
                          listType="picture-card"
                          className={s.antUpload}>
                <UploadButton isFileLoading = {isFileLoading}/>
            </Upload>
    </div>
}
const UploadButton = ({isFileLoading}) => {
    return <div>
        {isFileLoading? <LoadingOutlined/>:<PlusOutlined/>}
        <div style={{marginTop: 8}}>Upload photo</div>
    </div>
}

export default AvatarInput