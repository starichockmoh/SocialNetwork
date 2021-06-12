import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestUsers} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";
import {getPageSize} from "../../Redux/Selectors/UsersSelector";
import {AppStateType} from "../../Redux/ReduxStore";

type UsersPagePropsType = {
    title: string
}

const UsersPage: React.FC<UsersPagePropsType> = ({title}) => {
    const dispatch = useDispatch()
    const currentPage = useSelector((state: AppStateType) => state.UsersPage.currentPage)
    const pageSize = useSelector(getPageSize)
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, false, ''))
    },[])
    return <>
        <h1>{title}</h1>
        <Users pageSize={pageSize} currentPage={currentPage}/>
    </>
}


export default UsersPage