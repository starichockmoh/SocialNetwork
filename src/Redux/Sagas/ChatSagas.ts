import {call, put, take, takeEvery, takeLatest} from "redux-saga/effects"
import {ActionsConstantsType} from "../../Types/Types";
import {ChatActions} from "../Reducers/ChatReducer";
import {chatAPI, EmitterActionsType} from "../../Api/ApiChat";

export const StartChatSagaActions = {
    StartWsAC: () => ({type: "START_WS"} as const),
    SendMessageAC: (message: string) => ({type: "SEND_CHAT_MESSAGE", message} as const),
    CloseWSAC: () => ({type: "CLOSE_WS_CHANNEL"} as const)
}

type SendMessageActionType = ReturnType<typeof StartChatSagaActions.SendMessageAC>
type StartChatSagaActionsConstants = ActionsConstantsType<typeof StartChatSagaActions>

export function* WSSagaWatcher() {
    yield takeEvery<StartChatSagaActionsConstants>("START_WS", function* (){
        let channel: ReturnType<typeof chatAPI.start> = yield call(chatAPI.start)
        yield takeLatest<StartChatSagaActionsConstants, any>("SEND_CHAT_MESSAGE", SendMessageWorker)
        while (true) {
            const WSAction: EmitterActionsType  = yield take(channel)
            if (WSAction.type === "TRY_TO_RECONNECT") {
               channel = yield call(chatAPI.start)
            }
            else yield put(WSAction)
        }
    })
}
function* SendMessageWorker(action: SendMessageActionType) {
    yield call(chatAPI.sendMessage, action.message)
}


export function* StopWSSagaWatcher() {
    yield takeEvery<StartChatSagaActionsConstants, any>("CLOSE_WS_CHANNEL", StopWSWorker)
}

function* StopWSWorker() {
    yield call(chatAPI.stop)
    yield put(ChatActions.SetWSStatus("PENDING"))
}


