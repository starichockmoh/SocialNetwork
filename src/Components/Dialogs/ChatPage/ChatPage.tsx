import React, {useEffect} from "react";
import {ChatMessages} from "./ChatMessages/ChatMessages";
import {PageHeader} from "antd";
import {CommentOutlined} from "@ant-design/icons";
import {ChatInput} from "./ChatInput/ChatInput";
import Preloader from "../../Common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {StartChatSagaActions} from "../../../Redux/Sagas/ChatSagas";


const ChatPage: React.FC = () => {
    return <>
        <PageHeader title={<>Common chat with WebSocket!! <CommentOutlined/></>}/>
        <Chat/>
    </>
}


const Chat = () => {
    const dispatch = useDispatch()
    const MessagesArray = useSelector(((state: AppStateType) => state.Chat.ChatMessages))
    const WSStatus = useSelector(((state: AppStateType) => state.Chat.WSStatus))
    useEffect(() => {
        dispatch(StartChatSagaActions.StartWsAC())
        return () => {
            dispatch(StartChatSagaActions.CloseWSAC())
        }
    }, [dispatch])

    switch (WSStatus){
        case 'CLOSED':
            return <div style={{color: "red"}}>
                <Preloader/>
                <b>Try to connect</b>
            </div>
        case 'OPENED':
            return <>
                <ChatMessages MessagesArray={MessagesArray}/>
                <ChatInput WSStatus={WSStatus}/>
            </>
        case 'ERROR':
            return <div style={{color: "red"}}>
                SOME ERROR
                <p>Please refresh the page</p>
            </div>
        case 'PENDING':
            return <Preloader/>
    }
}

export default withAuthRedirect(ChatPage)