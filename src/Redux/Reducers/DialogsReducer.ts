import {DialogsApi} from "../../Api/Api";
import {DialogsType, MessagesType} from "../../Types/Types";

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

const DialogReducer = (state = InitialState, action: any):InitialStateType => {
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
const ShowMessagesAC = (messagesData: any):ShowMessagesACType => ({type: SET_MESSAGES, messagesData})
const SetDialogs = (dialogsData:any): SetDialogsActionType => ({type: SET_DIALOGS, dialogsData})
const AddNewMessage = (newMessage: any):AddNewMessageActionType => ({type: ADD_NEW_MESSAGE, newMessage})


export const AddNewDialog = (id: string) => async (dispatch: Function) => {
    let response = await DialogsApi.PutDialog(id)
    if (response.data.resultCode === 0) {
        dispatch(ShowDialogs())
    }
}
export const ShowDialogs = () => async (dispatch: Function) => {
    let response = await DialogsApi.GetDialogs()
    dispatch(SetDialogs(response.data))
}
export const ShowMessages = (id: string) => async (dispatch: Function) => {
    let response = await DialogsApi.GetUserDialog(id)
    dispatch(ShowMessagesAC(response.data.items))
}
export const SendMessage = (userid: string,message: string) => async (dispatch: Function) => {
    let response = await DialogsApi.PutMessage(userid, message)
    if (response.data.resultCode === 0) {
        dispatch(AddNewMessage(response.data.data.message))
    }
}
export const DeleteMessage = (messageId:string, userID:string) => async (dispatch: Function) => {
    let response = await DialogsApi.DeleteMessage(messageId)
    if (response.data.resultCode === 0){
        dispatch(ShowMessages(userID))
    }
}

export default DialogReducer;