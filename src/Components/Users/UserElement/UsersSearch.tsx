import React from "react";
import styles from "./UsersSearch.module.css"
import {Button, Checkbox, Form, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {requestUsers} from "../../../Redux/Reducers/UsersReducer";

type ValuesType = {
    term: string,
    followed: boolean
}

type PropsType = {
    currentPage: number
    pageSize: number
}
const UsersSearch: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const ActivateSearch = (values: ValuesType) => {
        dispatch(requestUsers(props.currentPage, props.pageSize, values.followed, values.term))
    }
    return <>
        <Form onFinish={ActivateSearch} name="user_search" className = {styles.Search}>
            <Form.Item name="term">
                <Input/>
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