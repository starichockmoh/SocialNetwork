import React from "react";
import News from "./News";
import {connect} from "react-redux";
import {addNewPost, addNewText} from "../../Redux/Reducers/NewsReducer";


let mapStateToProps = (state) => {
    return {
        NewsState: state.NewsPage
    }
}
const NewsContainer = connect(mapStateToProps,
    {addNewPost,addNewText})(News)


export default NewsContainer