import {DialogsApi} from "../../Api/Api";
import {ActionsType, DialogsType, MessagesType, NullableType, ResultCodesEnum} from "../../Types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";

let InitialState = {
    DialogsData: null as  NullableType<Array<DialogsType>>,
    MessagesData: null as NullableType<Array<MessagesType>>
}

type InitialStateType = typeof InitialState

const DialogReducer = (state = InitialState, action: DialogsActionsType):InitialStateType => {
    switch (action.type) {
        case "ADD_NEW_MESSAGE": {
            return {
                ...state,
                MessagesData: [...state.MessagesData as Array<MessagesType>, action.newMessage],
            }
        }
        case "SET_MESSAGES": {
            return {
                ...state,
                MessagesData: action.messagesData
            }
        }
        case "SET_DIALOGS": {
            return {
                ...state,
                DialogsData: action.dialogsData
            }
        }
        default:
            return state
    }
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, DialogsActionsType>
type DialogsActionsType = ActionsType<typeof DialogsActions>

const DialogsActions = {
    ShowMessagesAC:(messagesData: Array<MessagesType>) => ({type: "SET_MESSAGES", messagesData} as const),
    SetDialogs:(dialogsData:Array<DialogsType>) => ({type: "SET_DIALOGS", dialogsData} as const),
    AddNewMessage: (newMessage: MessagesType) => ({type: "ADD_NEW_MESSAGE", newMessage} as const)
}

export const AddNewDialog = (id: number) : ThunkType  =>
    async (dispatch,getState) => {
    let data = await DialogsApi.PutDialog(id)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(ShowDialogs())
    }
}
export const ShowDialogs = () : ThunkType  =>
    async (dispatch) => {
    let data = await DialogsApi.GetDialogs()
    dispatch(DialogsActions.SetDialogs(data))
}
export const ShowMessages = (id: string) : ThunkType  =>
    async (dispatch,getState) => {
    let data = await DialogsApi.GetUserDialog(id)
    dispatch(DialogsActions.ShowMessagesAC(data.items))
}
export const SendMessage = (userid: string,message: string) : ThunkType =>
    async (dispatch,getState) => {
    debugger
    let data = await DialogsApi.PutMessage(userid, message)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(DialogsActions.AddNewMessage(data.data.message))
    }
}
export const DeleteMessage = (messageId:string, userID:string) : ThunkType =>
    async (dispatch,getState) => {
    let data = await DialogsApi.DeleteMessage(messageId)
    if (data.resultCode=== ResultCodesEnum.Success){
        dispatch(ShowMessages(userID))
    }
}

export default DialogReducer;