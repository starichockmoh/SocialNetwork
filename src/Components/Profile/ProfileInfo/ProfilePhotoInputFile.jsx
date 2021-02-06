import s from "./ProfileInfo.module.css";
import React from "react";

const ProfilePhotoInputFile = (props) => {
    return <div className={s.input__wrapper}>
        <input onChange={props.onMainPhotoSelected} type={"file"} name="file" id="input__file" className={s.input__file} multiple/>
        <label htmlFor="input__file" className={s.input__file_button}>
                <span className={s.input__file_icon_wrapper}><img src="https://i.pinimg.com/736x/55/3f/21/553f212f6a5588d90134c3f29086f2e7.jpg"
                                                                  alt="Сменить фото" width="25"/>
                </span>
            <span className={s.input__file_button_text}>Сменить фото</span>
        </label>
    </div>
}

export default ProfilePhotoInputFile