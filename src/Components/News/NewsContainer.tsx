import React from "react";
import News from "./News";
import {connect} from "react-redux";
import {addNewPost, addNewText} from "../../Redux/Reducers/NewsReducer";
import {AppStateType} from "../../Redux/ReduxStore";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state:AppStateType) => {
    return {
        NewsState: state.NewsPage
    }
}
const NewsContainer = connect(mapStateToProps,
    {addNewPost,addNewText})(News)


export default withAuthRedirect(NewsContainer)