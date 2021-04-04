import React from "react";
import {AddNewDialog, DeleteMessage, SendMessage, ShowDialogs, ShowMessages} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {requestUsers} from "../../Redux/Reducers/UsersReducer";
import {AppStateType} from "../../Redux/ReduxStore";
import {DialogsType, MessagesType, UserType} from "../../Types/Types";

type MapStateToPropsType = {
    Friends: Array<UserType>
    DialogsData: Array<DialogsType> | null
    MessagesData: Array<MessagesType> | null
    CurrentUserId: null | number
}
type MapDispatchToPropsType = {
    ShowDialogs: () => void
    requestUsers: (currentPage:number, pageSize:number, friend:boolean,term:string) => void
    DeleteMessage: (messageId:string, userID:string) => void
    AddNewDialog: (id: number) => void
    SendMessage: (userid: string,message: string) => void
    ShowMessages: (id: string) => void
}
type OwnPropsType = {
    match: any
}
type PropsType =  OwnPropsType & MapDispatchToPropsType & MapStateToPropsType

class DialogContainerClass extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId){
            this.props.ShowMessages(userId)
        }
        this.props.ShowDialogs()
        if (this.props.Friends.length === 0){
            this.props.requestUsers(1,9,true,'')
        }
    }
    componentDidUpdate(prevProps:Readonly<PropsType>) {
        if (prevProps.match.params.userId !== this.props.match.params.userId){
            let userId: string = this.props.match.params.userId
            if (userId){
                this.props.ShowMessages(userId)
            }
        }
    }

    render() {
        return <Dialogs {...this.props} DialogsData = {this.props.DialogsData}
                        MessagesData = {this.props.MessagesData}
                        UserId = {this.props.match.params.userId}
        />
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        DialogsData: state.DialogsPage.DialogsData,
        MessagesData: state.DialogsPage.MessagesData,
        CurrentUserId: state.Auth.CurrentUserId,
        Friends: state.UsersPage.friends,
    }
}


const DialogContainer:any = compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {requestUsers, AddNewDialog,ShowDialogs,
        ShowMessages,SendMessage,DeleteMessage}),
    withAuthRedirect,
    withRouter
)(DialogContainerClass)
export default DialogContainer