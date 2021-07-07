import {Button, Form} from "antd";
import React from "react";
import TextArea from "antd/es/input/TextArea";
import styles from "./ChatInput.module.css"
import {CloseCircleOutlined, SendOutlined} from "@ant-design/icons";
import {WSStatusType} from "../../../../Types/Types";
import {useDispatch} from "react-redux";
import {StartChatSagaActions} from "../../../../Redux/Sagas/ChatSagas";


type PropsType = {
    WSStatus: WSStatusType
}

export const ChatInput: React.FC<PropsType> = ({WSStatus}) => {
    const dispatch = useDispatch()
    const onFinish = (values:{ChatInputEnterMessage: string}) => {
        dispatch(StartChatSagaActions.SendMessageAC(values.ChatInputEnterMessage))
        form.resetFields()
    }
    const [form] = Form.useForm();
    return <Form className={styles.ChatInput} name={'ChatInput'} onFinish={onFinish} form={form}>
        <Form.Item name={'ChatInputEnterMessage'} rules={[{required: true, message: 'Please input message!'}]}>
            <TextArea allowClear={true} placeholder={'Enter your message...'}/>
        </Form.Item>
        <Form.Item>
            <Button disabled={WSStatus !== 'OPENED'} htmlType={'submit'} icon={<SendOutlined/>}/>
        </Form.Item>
    </Form>
}