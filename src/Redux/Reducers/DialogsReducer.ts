import {DialogsApi} from "../../Api/Api";
import {DialogsType, MessagesType, ResultCodesEnum} from "../../Types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";

const SET_DIALOGS = 'SET_DIALOGS'
const SET_MESSAGES = 'SET_MESSAGES'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

type InitialStateType = {
    DialogsData: Array<DialogsType> | null
    MessagesData: Array<MessagesType> | null

}
let InitialState: InitialStateType = {
    DialogsData: null,
    MessagesData: null
}

const DialogReducer = (state = InitialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                MessagesData: [...state.MessagesData as Array<MessagesType>, action.newMessage],
            }
        }
        case SET_MESSAGES: {
            return {
                ...state,
                MessagesData: action.messagesData
            }
        }
        case SET_DIALOGS: {
            return {
                ...state,
                DialogsData: action.dialogsData
            }
        }
        default:
            return state
    }
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>
type ActionsType = ShowMessagesACType | SetDialogsActionType | AddNewMessageActionType

type ShowMessagesACType = {
    type: typeof SET_MESSAGES
    messagesData: Array<MessagesType>
}
type SetDialogsActionType = {
    type: typeof SET_DIALOGS
    dialogsData: Array<DialogsType>
}
type AddNewMessageActionType = {
    type: typeof ADD_NEW_MESSAGE
    newMessage: MessagesType
}
const ShowMessagesAC = (messagesData: Array<MessagesType>):ShowMessagesACType => ({type: SET_MESSAGES, messagesData})
const SetDialogs = (dialogsData:Array<DialogsType>): SetDialogsActionType => ({type: SET_DIALOGS, dialogsData})
const AddNewMessage = (newMessage: MessagesType):AddNewMessageActionType => ({type: ADD_NEW_MESSAGE, newMessage})


export const AddNewDialog = (id: number) : ThunkType  =>
    async (dispatch,getState) => {
    let data = await DialogsApi.PutDialog(id)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(ShowDialogs())
    }
}
export const ShowDialogs = () : ThunkType  =>
    async (dispatch,getState) => {
    let data = await DialogsApi.GetDialogs()
    dispatch(SetDialogs(data))
}
export const ShowMessages = (id: string) : ThunkType  =>
    async (dispatch,getState) => {
    let data = await DialogsApi.GetUserDialog(id)
    dispatch(ShowMessagesAC(data.items))
}
export const SendMessage = (userid: string,message: string) : ThunkType  =>
    async (dispatch,getState) => {
    let data = await DialogsApi.PutMessage(userid, message)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(AddNewMessage(data.data.message))
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