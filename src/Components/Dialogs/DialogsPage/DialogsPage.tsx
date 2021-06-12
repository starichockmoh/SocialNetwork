import React, {useEffect} from "react"
import DialogItem from "./DialogItem";
import {useDispatch, useSelector} from "react-redux";
import {ShowDialogs} from "../../../Redux/Reducers/DialogsReducer";
import {AppStateType} from "../../../Redux/ReduxStore";
import styles from "./DialogsPage.module.css"

const DialogsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ShowDialogs())
    })
    const DialogsData = useSelector((state: AppStateType) => state.DialogsPage.DialogsData)
    const DialogsComponentsArray = DialogsData?.map(d => <DialogItem Dialog={d}/>)
    return <div  className={styles.DialogsPage}>
        {DialogsComponentsArray}
    </div>
}

export default DialogsPage