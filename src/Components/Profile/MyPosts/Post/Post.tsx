import React, {useEffect, useState} from 'react';
import s from './Post.module.css';
import {useDispatch, useSelector} from "react-redux";
import {ProfileActions} from "../../../../Redux/Reducers/ProfileReducer";
import {Avatar, Button, Comment, Tooltip} from "antd";
import {NavLink} from "react-router-dom";
import styles from "../../../Dialogs/ChatPage/ChatMessages/ChatMessages.module.css";
import {AppStateType} from "../../../../Redux/ReduxStore";
import {HeartOutlined, CloseCircleOutlined} from "@ant-design/icons";
import moment from "moment";
import userPhoto from "./../../../../accepts/images/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.jpg"


type PropsType = {
    message:string
    likecount:number
    id:number
}
const Post: React.FC<PropsType> = (props) => {
    const [Likes, setLikes] = useState(props.likecount)

    useEffect(() => {
        setLikes(props.likecount)
    }, [props.likecount])

    const ChangeLikes = () => {
        if (Likes > props.likecount) setLikes(Likes-1)
        else setLikes(Likes + 1)
    }


    const id = props.id
    const photo = useSelector((state: AppStateType) => state.Auth.CurrentUserPhoto)
    const dispatch = useDispatch()
    const deleteProfilePost = () => {
        dispatch(ProfileActions.deleteProfilePost(id))
    }
    return <div className={s.PostBlock}>
            <Comment
                // avatar={
                //    <img className={s.Avatar} src={photo? photo: userPhoto} alt={''}/>
                // }
                content = {
                    <div className={s.PostContent}>
                        <p>
                            <Avatar className={s.Avatar} src={photo? photo: userPhoto} alt={''}/>  {props.message}
                        </p>
                        <p>

                            <Button onClick={ChangeLikes} icon={<HeartOutlined/>} type={"link"}>
                                <span style={{color: "grey"}}>{Likes}</span>
                            </Button>
                            <div>
                                <Button style={{marginLeft:6}} onClick={deleteProfilePost} icon={<CloseCircleOutlined/>} type={"link"} danger={true}/>
                            </div>
                        </p>
                    </div>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>13 April 20:00</span>
                    </Tooltip>
                }
            />
        </div>
}
export default Post