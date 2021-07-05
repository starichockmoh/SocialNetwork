import {call, put, SagaReturnType, takeEvery, takeLatest} from "redux-saga/effects";
import {DialogsApi} from "../../Api/Api";
import {ActionsConstantsType, ResultCodesEnum} from "../../Types/Types";
import {DialogsActions} from "../Reducers/DialogsReducer";


type PatternsType = ActionsConstantsType<typeof ActivateSagasActions>
type SagaWorkerType<T> = (action: T) => any

export const ActivateSagasActions = {
    DeleteMessageAC: (messageId: string, userID: string, page: string) =>
        ({type: "FETCH_DELETE_MESSAGE", messageId, userID, page} as const),
    ShowMessagesAC: (id: string, page: string) => ({type: "FETCH_SHOW_MESSAGE", id, page} as const),
    AddNewDialogAC: (id: number) => ({type: "FETCH_ADD_NEW_DIALOG", id} as const),
    ShowDialogsAC: () => ({type: "FETCH_SHOW_DIALOGS"} as const),
    SendMessageAC: (userid: string, message: string) => ({type: "FETCH_SEND_MESSAGE", userid, message} as const)
}




export function* watchDeleteMessage(): Generator<any, any, any> {
    yield takeEvery<PatternsType, SagaWorkerType<MessageDeleteActionType>>("FETCH_DELETE_MESSAGE", fetchDeleteMessage)
    yield takeLatest<PatternsType, SagaWorkerType<MessagesShowActionType>>("FETCH_SHOW_MESSAGE", fetchShowMessages)
    yield takeEvery<PatternsType, SagaWorkerType<AddNewDialogActionType>>("FETCH_ADD_NEW_DIALOG", fetchAddNewDialog)
    yield takeEvery<PatternsType, SagaWorkerType<ShowDialogsActionType>>("FETCH_SHOW_DIALOGS", fetchShowDialogs)
    yield takeEvery<PatternsType, SagaWorkerType<SendMessageActionType>>("FETCH_SEND_MESSAGE", fetchSendMessage)
}


type MessagesShowActionType = ReturnType<typeof ActivateSagasActions.ShowMessagesAC>
type GetUserDataType = SagaReturnType<typeof DialogsApi.GetUserDialog>

function* fetchShowMessages(action: MessagesShowActionType) {
    const data: GetUserDataType = yield call(DialogsApi.GetUserDialog, action.id, action.page)
    yield put(DialogsActions.SetCurrentPage(Number(action.page)))
    yield put(DialogsActions.SetTotalItems(data.totalCount))
    yield put(DialogsActions.ShowMessagesAC(data.items))
}


type MessageDeleteActionType = ReturnType<typeof ActivateSagasActions.DeleteMessageAC>
type DeleteDataType = SagaReturnType<typeof DialogsApi.DeleteMessage>

function* fetchDeleteMessage(action: MessageDeleteActionType){
    const data: DeleteDataType = yield call( DialogsApi.DeleteMessage, action.messageId)
    if (data.resultCode === ResultCodesEnum.Success) {
        yield call(fetchShowMessages, ActivateSagasActions.ShowMessagesAC(action.userID,action.page))
    }
}


type AddNewDialogActionType = ReturnType<typeof ActivateSagasActions.AddNewDialogAC>
type AddNewDialogDataType = SagaReturnType<typeof DialogsApi.PutDialog>

function* fetchAddNewDialog(action: AddNewDialogActionType){
    const data: AddNewDialogDataType = yield call( DialogsApi.PutDialog, action.id)
    if (data.resultCode === ResultCodesEnum.Success) {
        yield call(fetchShowDialogs, ActivateSagasActions.ShowDialogsAC())
    }
}


type ShowDialogsActionType = ReturnType<typeof ActivateSagasActions.ShowDialogsAC>
type ShowDialogDataType = SagaReturnType<typeof DialogsApi.GetDialogs>

function* fetchShowDialogs(action: ShowDialogsActionType){
    const data: ShowDialogDataType = yield call( DialogsApi.GetDialogs)
    yield put(DialogsActions.SetDialogs(data))

}


type SendMessageActionType = ReturnType<typeof ActivateSagasActions.SendMessageAC>
type SendMessageDataType = SagaReturnType<typeof DialogsApi.PutMessage>

function* fetchSendMessage(action: SendMessageActionType){
    const data: SendMessageDataType = yield call( DialogsApi.PutMessage, action.userid, action.message)
    if (data.resultCode === ResultCodesEnum.Success) {
        yield put(DialogsActions.AddNewMessage(data.data.message))
    }

}




