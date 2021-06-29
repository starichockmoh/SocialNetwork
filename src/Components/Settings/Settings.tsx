import React from "react";
import {PageHeader} from "antd";
import {SettingOutlined} from "@ant-design/icons";

const Settings:React.FC<{}> = () => {
    return (
        <div>
            <PageHeader title={<>Settings <SettingOutlined /></>}/>
        </div>
    )
}

export default Settings