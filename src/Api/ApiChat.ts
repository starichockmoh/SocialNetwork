import {ChatMessageType} from "../Types/Types";
import {ChatActions, ChatActionsType} from "../Redux/Reducers/ChatReducer";
import {eventChannel} from "redux-saga";

let ws: WebSocket | null = null
export type EmitterActionsType = ChatActionsType | {type: "TRY_TO_RECONNECT"}
type EmitterType = (input: EmitterActionsType) => void
let emitter: EmitterType


const MessageHandler = (e: MessageEvent) => {
    let ChatMessages: Array<ChatMessageType> | null = null
    try {
        ChatMessages = JSON.parse(e.data)
    } catch(e) {
        console.error(`Error parsing : ${e.data}`)
    }
    if (ChatMessages) {
        return emitter(ChatActions.SetChatMessages(ChatMessages))
    }
}

const CloseHandler = () => {
    console.log("CLOSED")
    emitter(ChatActions.SetWSStatus("CLOSED"))
    setTimeout(() => emitter({ type: "TRY_TO_RECONNECT"}), 3000)

}

const OpenedHandler = () => {
    console.log("OPENED")
    emitter(ChatActions.SetWSStatus("OPENED"))
}
const ErrorHandler = () => {
    console.log("ERROR")
    emitter(ChatActions.SetWSStatus("ERROR"))
}

const CleanUp = () => {
    ws?.removeEventListener('close',CloseHandler)
    ws?.removeEventListener('message', MessageHandler)
    ws?.removeEventListener('open', OpenedHandler)
    ws?.removeEventListener('error', ErrorHandler)
    ws?.close()
}


const initWebsocket = () => {
    return eventChannel((emitt: EmitterType) => {
        emitter = emitt
        CleanUp()
        ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        ws.addEventListener('close', CloseHandler)
        ws.addEventListener('open', OpenedHandler)
        ws.addEventListener('error', ErrorHandler)
        ws.addEventListener('message', MessageHandler)
        return () => {

        }
    })
}

export const chatAPI = {
    start() {
       return initWebsocket()
    },
    stop(){
        CleanUp()
    },
    sendMessage(message: string){
        ws?.send(message)
    }
}

