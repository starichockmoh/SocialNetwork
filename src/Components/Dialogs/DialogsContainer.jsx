import React from "react";
import {AddNewDialog, DeleteMessage, SendMessage, ShowDialogs, ShowMessages} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

class DialogContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId){
            this.props.ShowMessages(userId)
        }
        this.props.ShowDialogs()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId){
            let userId = this.props.match.params.userId
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


let mapStateToProps = (state) => {
    return {
        DialogsData: state.DialogsPage.DialogsData,
        MessagesData: state.DialogsPage.MessagesData,
        CurrentUserId: state.Auth.CurrentUserId,
    }
}

export default compose(
    connect(mapStateToProps, {AddNewDialog,ShowDialogs,ShowMessages,SendMessage,DeleteMessage}),
    withAuthRedirect,
    withRouter
)(DialogContainer)