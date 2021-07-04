import React from "react";
import styles from "./UsersSearch.module.css"
import {Button, Checkbox, Form, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {requestUsers} from "../../../Redux/Reducers/UsersReducer";
import {AppStateType} from "../../../Redux/ReduxStore";

type ValuesType = {
    term: string
    followed: boolean
}

type PropsType = {
    pageSize: number
}
const UsersSearch: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const currentPage = useSelector((state: AppStateType) => state.UsersPage.currentPage)
    const ActivateSearch = (values: ValuesType) => {
        dispatch(requestUsers(currentPage, props.pageSize, values.followed, values.term))
    }
    return <>
        <Form onFinish={ActivateSearch} name="user_search" className = {styles.Search}>
            <Form.Item name="term">
                <Input placeholder={'Enter name...'}/>
            </Form.Item>
            <Form.Item name="followed" valuePropName="checked">
                <Checkbox> Only followed </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" icon={<SearchOutlined/>}>
                    Search
                </Button>
            </Form.Item>

        </Form>
    </>
}

export default UsersSearch