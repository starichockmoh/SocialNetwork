import React from "react";
import s from "./Users.module.css";
import UserElement from "./UserElement/UserElement";
import {Paginator} from "../Common/Paginator/Paginator";
import Preloader from "../Common/Preloader/Preloader";
import UsersSearch from "./UserElement/UsersSearch";


const Users = (props) => {
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