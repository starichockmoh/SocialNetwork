import {ActionsType, DialogsType, MessagesType, NullableType} from "../../Types/Types";

let InitialState = {
    DialogsData: null as NullableType<Array<DialogsType>>,
    MessagesData: null as NullableType<Array<MessagesType>>,
    CurrentMessagePage: 1,
    TotalMessagesItems: 0
}

type InitialStateType = typeof InitialState

const DialogReducer = (state = InitialState, action: DialogsActionsType): InitialStateType => {
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
        case "SET_CURRENT_MESSAGE_PAGE": {
            return {
                ...state,
                CurrentMessagePage: action.page
            }
        }
        case "SET_TOTAL_MESSAGES_ITEMS": {
            return {
                ...state,
                TotalMessagesItems: action.totalItems
            }
        }
        default:
            return state
    }
}
type DialogsActionsType = ActionsType<typeof DialogsActions>

export const DialogsActions = {
    ShowMessagesAC: (messagesData: Array<MessagesType>) => ({type: "SET_MESSAGES", messagesData} as const),
    SetDialogs: (dialogsData: Array<DialogsType>) => ({type: "SET_DIALOGS", dialogsData} as const),
    AddNewMessage: (newMessage: MessagesType) => ({type: "ADD_NEW_MESSAGE", newMessage} as const),
    SetCurrentPage: (page: number) => ({type: "SET_CURRENT_MESSAGE_PAGE", page} as const),
    SetTotalItems: (totalItems: number) => ({type: "SET_TOTAL_MESSAGES_ITEMS", totalItems} as const)
}




export default DialogReducer;