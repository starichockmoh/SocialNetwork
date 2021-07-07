import {ActionsType, ChatMessageType, WSStatusType} from "../../Types/Types";
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

export type ChatActionsType = ActionsType<typeof ChatActions>

export const ChatActions = {
    SetChatMessages: (ChatMessages: Array<ChatMessageType>) => ({type: "SET_CHAT_MESSAGES", ChatMessages} as const),
    SetWSStatus: (WSStatus: WSStatusType) => ({type: 'SET_WS_STATUS', WSStatus} as const),
}

export default ChatReducer