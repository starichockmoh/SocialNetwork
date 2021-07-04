import {ChatMessageType, WSStatusType} from "../Types/Types";

type SubscriberFunction = (messages: Array<ChatMessageType>) => void
type SubscriberStatusFunction = (WSStatus: WSStatusType) => void

let ws: WebSocket | null = null //инициализация сокета
let subscribers: Array<SubscriberFunction> = []
let statusSubscribers: Array<SubscriberStatusFunction> = []

const CleanUp = () => {
    ws?.removeEventListener('close', CloseHandler) // зачищаем предыдущий сокет, если таковой имеется
    ws?.removeEventListener('message', MessageHandler)
    ws?.removeEventListener('open', OpenHandler)
    ws?.removeEventListener('error', ErrorHandler)
    ws?.close()
}

const CloseHandler = () => { //функция пересоздающая канал каждые три секунды после срабатывания события close
    console.log('CLOSED')
    statusSubscribers.forEach((c) => c('CLOSED'))
    setTimeout(createChannel, 3000)
}

const MessageHandler = (ev: MessageEvent) => {
    let NewMessages = JSON.parse(ev.data)
    subscribers.forEach((c) => c(NewMessages))
}
const OpenHandler = () => {
    statusSubscribers.forEach((c) => c('OPENED'))
}
const ErrorHandler = () => {
    statusSubscribers.forEach((c) => c('ERROR'))
    console.error('SOME ERROR')
}

const createChannel = () => { //функция создания канала
    CleanUp()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx') //открываем канал
    ws.addEventListener('close', CloseHandler) //подписываемся на закрытие
    ws.addEventListener('message', MessageHandler)
    ws.addEventListener('open', OpenHandler)
    ws.addEventListener('error', ErrorHandler)
}


export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        CleanUp()
        subscribers = []
        statusSubscribers = []
    },
    subscribe(callback: SubscriberFunction) {
        subscribers.push(callback)
    },
    unsubscribe(callback: SubscriberFunction) {
        subscribers = subscribers.filter((c) => c !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
    subscribeOnStatus(callback: SubscriberStatusFunction) {
        statusSubscribers.push(callback)
    },
    unsubscribeOnStatus(callback: SubscriberStatusFunction) {
        statusSubscribers = statusSubscribers.filter((c) => c !== callback)
    }
}