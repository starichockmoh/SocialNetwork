import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {ActionsType, ChatMessageType, WSStatusType} from "../../Types/Types";
import {chatAPI} from "../../Api/ApiChat";
import {Dispatch} from "redux";
import {v1} from "uuid"


let InitialState = {
    ChatMessages: [] as Array<ChatMessageTypeWithId>,
    WSStatus: 'PENDING' as WSStatusType
}
export type InitialStateType = typeof InitialState
export type ChatMessageTypeWithId = ChatMessageType & {id: string}

const ChatReducer = (state = InitialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_CHAT_MESSAGES":
            return {
                ...state,
                ChatMessages: [...state.ChatMessages, ...action.ChatMessages.map(m => ({...m, id: v1() }))]
                    .filter((m, index, array) => index >= array.length - 100)//храним только первые 100 сообщений
            }
        case "SET_WS_STATUS":
            return {
                ...state,
                WSStatus: action.WSStatus
            }
        default:
            return state

    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ChatActionsType>
type ChatActionsType = ActionsType<typeof ChatActions>



export const ChatActions = {
    SetChatMessages: (ChatMessages: Array<ChatMessageType>) => ({type: "SET_CHAT_MESSAGES", ChatMessages} as const),
    SetWSStatus: (WSStatus: WSStatusType) => ({type: 'SET_WS_STATUS', WSStatus} as const)
}


let _StatusSubscriber: ((WSStatus: WSStatusType) => void) | null = null

const GetStatusSubscriber = (dispatch: Dispatch) => {
    if (!_StatusSubscriber) {
        _StatusSubscriber = (WSStatus) => {
            dispatch(ChatActions.SetWSStatus(WSStatus))
        }
    }
    return _StatusSubscriber
}


let _Subscriber: ((messages: ChatMessageType[]) => void) | null = null

const GetSubscriber = (dispatch: Dispatch) => {
    if (!_Subscriber) {
        _Subscriber = (messages) => {
            dispatch(ChatActions.SetChatMessages(messages))
        }
    }
    return _Subscriber
}

export const StartMessagesListening = (): ThunkType =>
    async (dispatch) => {
        chatAPI.start()
        chatAPI.subscribe(GetSubscriber(dispatch))
    }
export const StopMessagesListening = (): ThunkType =>
    async (dispatch) => {
        chatAPI.unsubscribe(GetSubscriber(dispatch))
        chatAPI.stop()
    }
export const SendChatMessage = (message: string): ThunkType =>
    async (dispatch) => {
        chatAPI.sendMessage(message)
    }
export const StartToControlStatus = (): ThunkType =>
    async (dispatch) => {
    chatAPI.subscribeOnStatus(GetStatusSubscriber(dispatch))
    }
export const StopToControlStatus = (): ThunkType =>
    async (dispatch) => {
        chatAPI.unsubscribeOnStatus(GetStatusSubscriber(dispatch))
    }
export default ChatReducer