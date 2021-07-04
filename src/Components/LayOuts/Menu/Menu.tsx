import React, {useEffect, useState} from "react";
import styles from "./Menu.module.css"
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink, useHistory} from "react-router-dom";
import {Layout, Menu} from 'antd';
const {Sider} = Layout;

const {SubMenu} = Menu;

export const AppMenu: React.FC<{ isAuth: boolean }> = ({isAuth}) => {
    const history = useHistory()
    const [CurrentPage, SetCurrentPage] = useState('')
    useEffect(() => {
        let page = history.location.pathname.split('/')[1]
        if (page === 'dialogs') page = 'dialogs_page'
        SetCurrentPage(page)
    }, [history.location.pathname])
    return <Sider className={styles.Sider}>
        <div className={styles.MenuBlock}>
            <Menu
                className={styles.Menu}
                mode="inline"
                selectedKeys={[CurrentPage]}
                defaultOpenKeys={['sub1', 'sub2', 'sub3']}
            >
                <SubMenu key="sub1" icon={<UserOutlined/>} title="Profile">
                    <Menu.Item key="profile"><NavLink exact to='/profile'>Profile</NavLink></Menu.Item>
                    <Menu.Item key="friends"><NavLink to='/friends'>Friends</NavLink></Menu.Item>
                    <Menu.Item key="music"><NavLink to='/music'>Music</NavLink></Menu.Item>
                    <Menu.Item key="dialogs_page"><NavLink to='/dialogs_page'>Messages</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Social">
                    <Menu.Item key="users"><NavLink to='/users'>Find Users</NavLink></Menu.Item>
                    <Menu.Item key="news"><NavLink to='/news'>News</NavLink></Menu.Item>
                    <Menu.Item key="chat"><NavLink to='/chat'>Common Chat</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Other">
                    <Menu.Item key="settings"><NavLink to='/settings'> Settings</NavLink></Menu.Item>
                    {isAuth && <Menu.Item key="exit"><NavLink to='/exit'> Exit</NavLink></Menu.Item>}
                </SubMenu>
            </Menu>
        </div>
    </Sider>
}