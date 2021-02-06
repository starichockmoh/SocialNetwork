import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getProfileStatus, saveMainPhoto, UpdateProfileInfo,
    UpdateProfileStatus
} from "../../Redux/Reducers/ProfileReducer";
import {withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.CurrentUserId
            this.props.getProfile(userId)
            this.props.getProfileStatus(userId)

        } else {
            this.props.getProfileStatus(userId)
            this.props.getProfile(userId)
        }
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (!this.props.match.params.userId) {
    //         this.props.getProfile(this.props.CurrentUserId)
    //         this.props.getProfileStatus(this.props.CurrentUserId)
    //     }
    // }

    render() {
        return <Profile {...this.props} ProfileInfo={this.props.ProfileInfo}/>
    }
}

let mapStateToProps = (state) => {
    return {
        ProfileInfo: state.ProfilePage.ProfileInfo,
        CurrentUserId: state.Auth.CurrentUserId,
        ProfileStatus: state.ProfilePage.ProfileStatus,
        isFetching: state.ProfilePage.isFetching,
        submitWasSuccess: state.ProfilePage.submitWasSuccess
    }
}
export default compose(
    connect(mapStateToProps, {
        getProfile,
        getProfileStatus, UpdateProfileStatus, UpdateProfileInfo, saveMainPhoto
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

