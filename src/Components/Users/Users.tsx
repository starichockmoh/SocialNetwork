import React from "react";
import s from "./Users.module.css";
import UserElement from "./UserElement/UserElement";
import {Paginator} from "../Common/Paginator/Paginator";
import Preloader from "../Common/Preloader/Preloader";
import UsersSearch from "./UserElement/UsersSearch";
import {UserType} from "../../Types/Types";
import {setCurrentPageACType} from "../../Redux/Reducers/UsersReducer";

type PropsType = {
    onPageChanged: (p:number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageAC: (page:number) => setCurrentPageACType
    requestUsers: (currentPage:number, pageSize:number, friend:boolean,term: string) => void
    followIsProgressing: Array<number>
    FollowOrUnfollow: (userId:number,follow:boolean,isFriend:boolean) => void
    isFetching: boolean
    users: Array<UserType>
}

const Users: React.FC<PropsType> = (props) => {
    return <div>
        <Paginator
            onPageChanged={props.onPageChanged}
            totalItems={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage = {props.currentPage}
            currentPageAc = {props.setCurrentPageAC}
        />
        <UsersSearch SearchRequest = {props.requestUsers} currentPage = {props.currentPage} pageSize={props.pageSize}/>
        {props.isFetching ? <Preloader/> :
                props.users.map(u => <UserElement key={u.id}
                                                  user={u}
                                                  followIsProgressing={props.followIsProgressing}
                                                  FollowOrUnfollow={props.FollowOrUnfollow}
                />)

        }
    </div>
}

export default Users