import React, {useEffect, useState} from "react";
import styles from "./Hooks.module.css"
import {Alert, Avatar, Button} from "antd";
import Search from "antd/es/input/Search";
import axios from "axios";
import {NullableType} from "../Types/Types";
import Preloader from "../Components/Common/Preloader/Preloader";
import AppPreloader from "../Components/Common/Preloader/AppPreloader";

type UserType = {
    location: string
    avatar_url: NullableType<string>
    login: string
    followers: number
    name: string
}

type PreviewUserType = {
    avatar_url: NullableType<string>
    login: string
    id: number
}

type ResponseType = {
    items: Array<PreviewUserType>
}

export const TestingUseEffect: React.FC = () => {
    const [CurrentUser, SetUser] = useState<null | string>(null)
    const [CurrentSearch, SetSearch] = useState("it-kamasutra")

    const onSearch = (value: string) => {
        value && SetSearch(value)
    }
    const onSelect = (login: string | null) => {
        SetUser(login)
    }

    useEffect(() => {
        CurrentUser? document.title = CurrentUser : document.title = ''
    }, [CurrentUser])

    return <div className={styles.Container}>
        <h1>
            Test useEffect
        </h1>
        <div className={styles.Table}>
            <div>
                <SearchComponent onSearch={onSearch} CurrentSearch={CurrentSearch}/>
                <Button onClick={() => onSearch("it-kamasutra")} className={styles.ResetBtn} type={"primary"}>
                    Reset
                </Button>
                <UsersList CurrentSearch={CurrentSearch} onSelect={onSelect} CurrentUser={CurrentUser}/>
            </div>
            {CurrentUser && <Details CurrentUser={CurrentUser} onSelect={onSelect}/>}
        </div>
    </div>
}


type UsersListPropsType = {
    CurrentSearch: string
    onSelect: (login: string) => void
    CurrentUser: string | null

}


const UsersList: React.FC<UsersListPropsType> = ({onSelect, CurrentSearch, CurrentUser}) => {
    const [UsersData, SetUsersData] = useState<Array<PreviewUserType>>([])
    const [isLoading, SetLoading] = useState(false)

    useEffect(() => {
        SetLoading(true)
        axios.get<ResponseType>(`https://api.github.com/search/users?q=${CurrentSearch}&per_page=12`)
            .then((res) => {
                if (res.status === 200) {
                    SetUsersData(res.data.items)
                    SetLoading(false)
                }
            })
    }, [CurrentSearch])
    const UsersArray = UsersData.map(u =>
        <li onClick={() => onSelect(u.login)}
            className={u.login === CurrentUser ? styles.active : undefined}
            key={u.id}>
            <Avatar src={u.avatar_url}/>
            <div>
                {u.login}
            </div>
        </li>)

    return <>
        {isLoading
            ? <Preloader/>
            : <ul className={styles.UsersList}>
                {UsersArray.length ? UsersArray : 'no users'}
            </ul>
        }
    </>
}


const Timer: React.FC<{onEndTime: (login: string | null) => void}> = ({onEndTime}) => {
    const [time, SetTime] = useState(3)
    useEffect(() => {
        let timerId = setInterval(() => {
            console.log('tick')
                SetTime((actual) => {
                    if (actual === 1) {
                        onEndTime(null)
                        return 0
                    } else {
                        return actual - 1
                    }
                })
            },
            1000)
        return () => clearInterval(timerId)
    }, [])
    return <div>
        <Alert message={time} type="warning" showIcon closable/>
    </div>
}

type DetailsPropsType = {
    CurrentUser: string
    onSelect: (login: string | null) => void
}


const Details: React.FC<DetailsPropsType> = ({CurrentUser, onSelect}) => {
    const [CurrentUserData, SetUserData] = useState<NullableType<UserType>>(null)
    const [isDataLoading, SetDataLoading] = useState(false)

    useEffect(() => {
        SetDataLoading(true)
        axios.get<UserType>('https://api.github.com/users/' + CurrentUser)
            .then(res => {
                if (res.status === 200) {
                    SetUserData(res.data)
                    SetDataLoading(false)
                }
            })
    }, [CurrentUser])


    if (!isDataLoading && CurrentUserData) return <div className={styles.Info}>
        <Timer onEndTime={onSelect}/>
        <h2>{CurrentUserData.name ? CurrentUserData.name : CurrentUserData.login}</h2>
        <div>
            <Avatar src={CurrentUserData.avatar_url} style={{width: 400, height: 400}}/>
        </div>

        <h3> User Info</h3>
        <div>
            <span>Followers:</span> {CurrentUserData.followers}
        </div>
        <div>
            <span>UserName:</span> {CurrentUserData.login}
        </div>
        <div>
            <span>Location:</span> {CurrentUserData.location}
        </div>
    </div>
    if (isDataLoading) {
        return <AppPreloader/>
    }
    return <></>
}


type SearchComponentPropsType = {
    onSearch: (value: string) => void
    CurrentSearch: string
}


const SearchComponent: React.FC<SearchComponentPropsType> = ({onSearch, CurrentSearch}) => {
    const [SearchValue, SetValue] = useState('')
    useEffect(() => {
        SetValue(CurrentSearch)
    }, [CurrentSearch])

    return <>
        <Search
            bordered={false}
            value={SearchValue}
            placeholder="input user's name..."
            allowClear
            enterButton={
                <Button type={CurrentSearch === SearchValue ? "text" : "primary"} disabled={!SearchValue}>
                    Search
                </Button>}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => SetValue(e.currentTarget.value)}
            onSearch={onSearch}
        />
    </>

}









