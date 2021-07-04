import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {DialogsActions, SendMessage, ShowMessages} from "../../../Redux/Reducers/DialogsReducer";
import {AppStateType} from "../../../Redux/ReduxStore";
import styles from "./MessagesPage.module.css"
import MyMessage from "./MyMessage";
import Message from "./Message";
import {getProfile} from "../../../Redux/Reducers/ProfileReducer";
import {Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import queryString from "querystring";
import {requestUsers} from "../../../Redux/Reducers/UsersReducer";
import {Paginator} from "../../Common/Paginator/Paginator";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import Preloader from "../../Common/Preloader/Preloader";


type ParamsType = {
    dialogId: string
}

const MessagesPage: React.FC = () => {
    const CurrentMessagePage = useSelector((state: AppStateType) => state.DialogsPage.CurrentMessagePage)
    const history = useHistory()
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const {dialogId} = useParams() as ParamsType
    useEffect(() => {
        dispatch(getProfile(dialogId))
    }, [dialogId, dispatch])

    useEffect(() => {
        const query: any = {}
        if (CurrentMessagePage !== 1) query.page = String(CurrentMessagePage)
        history.push({
            pathname: '/dialogs/' + dialogId + '/messages',
            search: queryString.stringify(query)
        })
    }, [CurrentMessagePage])

    useEffect(() => {
        const parsed: any = queryString.parse(history.location.search.substr(1))
        let actualPage = parsed.page? parsed.page : 1
        dispatch(ShowMessages(dialogId, actualPage))
    },[history.location.search])


    const FriendAvatar = useSelector((state: AppStateType) => state.ProfilePage.ProfileInfo?.photos.large)
    const FriendId = useSelector((state: AppStateType) => state.ProfilePage.ProfileInfo?.userId)
    const CurrentUserId = useSelector((state: AppStateType) => state.Auth.CurrentUserId)
    const MessagesData = useSelector((state: AppStateType) => state.DialogsPage.MessagesData)
    const TotalMessagesItems = useSelector((state: AppStateType) => state.DialogsPage.TotalMessagesItems)


    const MessagesComponentsArray = MessagesData?.map(m => {
        if (CurrentUserId === m.senderId){
            return <MyMessage Message={m} key={m.id}/>
        }
        else {
            return <Message Message={m} FriendAvatar={FriendAvatar? FriendAvatar : ''}/>
        }

    })
    const onFinish = (values: {send_message_textarea: string}) => {
        dispatch(SendMessage(String(FriendId), values.send_message_textarea))
        form.resetFields();
    }
    const onReset = () => {
        form.resetFields();
    };
    const onPageChanged = (page: number) => {
        dispatch(ShowMessages(dialogId, String(page)))
    }
    if (!MessagesData) return <Preloader/>
    return <div className = {styles.MessagesPage}>
        <Paginator onPageChanged={onPageChanged}
                   totalItems={TotalMessagesItems}
                   pageSize={10}
                   currentPage={CurrentMessagePage}
                   currentPageAc={DialogsActions.SetCurrentPage}/>
        {MessagesComponentsArray}
        <Form name = "send_message_form" onFinish={onFinish} form = {form}>
            <Form.Item name = "send_message_textarea" rules={[
                {required: true, message: 'Please input message!'},
            ]}>
                <TextArea/>
            </Form.Item>
            <Form.Item>
                <Button icon={<CheckOutlined/>} htmlType="submit">Send</Button>
                <Button icon={<CloseOutlined/>} htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default withAuthRedirect(MessagesPage)



