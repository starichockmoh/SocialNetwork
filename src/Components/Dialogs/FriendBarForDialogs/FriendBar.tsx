import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import {
    MailOutlined,
} from '@ant-design/icons';
import FriendElementBar from "./FriendElementBar";
import {UserType} from "../../../Types/Types";

const { SubMenu } = Menu;
type PropsType = {
    AddNewDialog: (id: number) => void
    FriendsArray: Array<UserType>
}
type StateType = {
    collapsed: boolean
}

class FriendBar extends React.Component<PropsType> {
    state: StateType = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        let FriendsArray = this.props.FriendsArray.map(friend => <Menu.Item key={friend.id}>
            <FriendElementBar AddNewDialog = {this.props.AddNewDialog} key={friend.id} userInfo = {friend}/>
        </Menu.Item>)

        return (
            <div style={{ width: 256 }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu key="sub1" icon={<MailOutlined/>} title="Friends">
                        {FriendsArray}
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default FriendBar