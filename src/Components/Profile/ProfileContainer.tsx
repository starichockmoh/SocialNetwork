import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getProfileStatus} from "../../Redux/Reducers/ProfileReducer";
import {useParams} from "react-router-dom"
import {AppStateType} from "../../Redux/ReduxStore";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {MyPosts} from "./MyPosts/MyPosts";
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";


const ProfilePage: React.FC = () => {
    const {userId} = useParams() as any
    const dispatch = useDispatch()
    const CurrentUserId = useSelector((state: AppStateType) => state.Auth.CurrentUserId)

    useEffect(() => {
        if (!userId) {
            if (CurrentUserId) {
                dispatch(getProfile(CurrentUserId))
                dispatch(getProfileStatus(CurrentUserId))
            }
        } else {
            dispatch(getProfile(userId))
            dispatch(getProfileStatus(userId))
        }
    }, [userId, dispatch, CurrentUserId])



    return (<div className={s.Profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}


export default withAuthRedirect(ProfilePage)

