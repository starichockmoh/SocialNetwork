import React from "react";
import music from './nature.mp3'
import s from './Music.module.css'

const Music = () => {
    let MusicArray = []
    for (let i = 0; i<=6; i++){
        MusicArray.push(<MusicBlock/>)
    }
    return (
        <div>
            {MusicArray}
        </div>
    )
}

const MusicBlock = () => {
    return <div className={s.MusicBlock}>
        <audio width="300" height="20" controls>
            <source src={music}/>
        </audio>
    </div>
}

export default Music