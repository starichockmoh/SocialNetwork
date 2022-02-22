import React from "react";
import s from './Music.module.css'
import {PageHeader} from "antd";
import {SoundOutlined} from "@ant-design/icons";
// @ts-ignore


const Music = () => {
    let MusicArray = []
    for (let i = 0; i<=6; i++){
        MusicArray.push(<MusicBlock/>)
    }
    return <div>
            <PageHeader title={<>Music <SoundOutlined /></>}/>
            {MusicArray}
        </div>
}

const MusicBlock = () => {
    return <div className={s.MusicBlock}>
        <audio style={{width: 600, height: 80}} controls>
            <source src={''}/>
        </audio>
    </div>
}

export default Music