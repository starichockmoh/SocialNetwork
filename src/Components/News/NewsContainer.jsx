import React from "react";
import {addNewText, addNewPost} from "../../Redux/Reducers/NewsReducer";
import News from "./News";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        NewsState: state.NewsPage
    }
}
const NewsContainer = connect(mapStateToProps,
    {addNewPost,addNewText})(News)


export default NewsContainer