import React from "react";
import {AddMessage} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        DialogsState: state.DialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {AddMessage}),
    withAuthRedirect
)(Dialogs)