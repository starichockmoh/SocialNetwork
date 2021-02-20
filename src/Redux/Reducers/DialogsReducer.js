import {DialogsApi} from "../../Api/Api";

const SET_DIALOGS = 'SET_DIALOGS'
const SET_MESSAGES = 'SET_MESSAGES'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'


let InitialState = {
        DialogsData: null,
        MessagesData: null
}

const DialogReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                MessagesData: [...state.MessagesData, action.newMessage]
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

const ShowMessagesAC = (messagesData) => ({type: SET_MESSAGES, messagesData})
const SetDialogs = (dialogsData) => ({type: SET_DIALOGS, dialogsData})
const AddNewMessage = (newMessage) => ({type: ADD_NEW_MESSAGE, newMessage})


export const AddNewDialog = (id) => async (dispatch) => {
    let response = await DialogsApi.PutDialog(id)
    if (response.data.resultCode === 0) {
        dispatch(ShowDialogs())
    }
}
export const ShowDialogs = () => async (dispatch) => {
    let response = await DialogsApi.GetDialogs()
    dispatch(SetDialogs(response.data))
}
export const ShowMessages = (id) => async (dispatch) => {
    let response = await DialogsApi.GetUserDialog(id)
    dispatch(ShowMessagesAC(response.data.items))
}
export const SendMessage = (userid,message) => async (dispatch) => {
    let response = await DialogsApi.PutMessage(userid, message)
    if (response.data.resultCode === 0) {
        dispatch(AddNewMessage(response.data.data.message))
    }
}
export const DeleteMessage = (messageId, userID) => async (dispatch) => {
    let response = await DialogsApi.DeleteMessage(messageId)
    if (response.data.resultCode === 0){
        dispatch(ShowMessages(userID))
    }
}

export default DialogReducer;