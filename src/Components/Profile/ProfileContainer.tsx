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
import {AddNewDialog} from "../../Redux/Reducers/DialogsReducer";
import {AppStateType} from "../../Redux/ReduxStore";
import {ProfileType} from "../../Types/Types";

type MapStateToPropsType = {
    CurrentUserId: number | null
    ProfileInfo: ProfileType | null
    isFetching: boolean
    submitWasSuccess: boolean
    ProfileStatus: string
}
type MapDispatchToPropsType = {
    getProfile: (userId: string | number) => void
    getProfileStatus: (userId:string | number) => void
    UpdateProfileStatus: (status:string) => void
    UpdateProfileInfo: (id: number, profile: ProfileType) => void
    saveMainPhoto: (photo:any) => void
    AddNewDialog: (id: number) => void
}

type OwnPropsType = {
    match:any
}
type PropsType = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType



class ProfileContainerClass extends React.Component<PropsType> {
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
    componentDidUpdate(prevProps:Readonly<PropsType>) {
        if (!this.props.match.params.userId && prevProps.match.params.userId && this.props.CurrentUserId !== null) {
            this.props.getProfile(this.props.CurrentUserId)
            this.props.getProfileStatus(this.props.CurrentUserId)
        }
    }

    render() {
        return <Profile {...this.props} ProfileInfo={this.props.ProfileInfo}/>
    }
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        ProfileInfo: state.ProfilePage.ProfileInfo,
        CurrentUserId: state.Auth.CurrentUserId,
        ProfileStatus: state.ProfilePage.ProfileStatus,
        isFetching: state.ProfilePage.isFetching,
        submitWasSuccess: state.ProfilePage.submitWasSuccess,
    }
}

const ProfileContainer:any = compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        getProfile,
        getProfileStatus, UpdateProfileStatus, UpdateProfileInfo, saveMainPhoto, AddNewDialog
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainerClass)


export default ProfileContainer

