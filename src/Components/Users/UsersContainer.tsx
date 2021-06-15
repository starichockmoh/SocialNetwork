import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestUsers} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";
import {getPageSize} from "../../Redux/Selectors/UsersSelector";
import {AppStateType} from "../../Redux/ReduxStore";
import { useHistory } from "react-router-dom"
import * as queryString from "querystring"

type QueryType = {
    term?: string,
    friend?: string,
    page?: string

}

type UsersPagePropsType = {
    title: string
}

const UsersPage: React.FC<UsersPagePropsType> = ({title}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentPage = useSelector((state: AppStateType) => state.UsersPage.currentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector((state: AppStateType) => state.UsersPage.filter)
    useEffect(() => {
        const query: QueryType = {}
        if (filter.term) query.term = filter.term
        query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)
        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [currentPage, filter])
    useEffect(() => {
        const parsed: QueryType = queryString.parse(history.location.search.substr(1))
        let actualPage = parsed.page? Number(parsed.page) : 1
        let actualTerm = parsed.term? parsed.term: ''
        let actualIsOnlyFollowed = parsed.friend === "true"
        dispatch(requestUsers(actualPage, pageSize, actualIsOnlyFollowed, actualTerm))
    },[history.location.search])

    return <>
        <h1>{title}</h1>
        <Users pageSize={pageSize} currentPage={currentPage}/>
    </>
}


export default UsersPage