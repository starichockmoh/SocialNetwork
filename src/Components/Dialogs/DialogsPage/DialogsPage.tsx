import React, {useEffect} from "react"
import DialogItem from "./DialogItem";
import {useDispatch, useSelector} from "react-redux";
import {DialogsActions, ShowDialogs} from "../../../Redux/Reducers/DialogsReducer";
import {AppStateType} from "../../../Redux/ReduxStore";
import styles from "./DialogsPage.module.css"
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import { NavLink } from "react-router-dom";
import {Button, PageHeader} from "antd";
import {CommentOutlined, MailOutlined} from "@ant-design/icons";

const DialogsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ShowDialogs())
        dispatch(DialogsActions.SetCurrentPage(1))
    }, [dispatch])
    const DialogsData = useSelector((state: AppStateType) => state.DialogsPage.DialogsData)
    const DialogsComponentsArray = DialogsData?.map(d => <DialogItem Dialog={d}/>)
    return <div className={styles.DialogsPage}>
        <PageHeader title={<>Dialogs <MailOutlined/></>}/>
        <NavLink to={'/chat'}><Button type={"link"} icon={<CommentOutlined/>}>Go to common chat</Button></NavLink>
        {DialogsComponentsArray}
    </div>
}

export default withAuthRedirect(DialogsPage)