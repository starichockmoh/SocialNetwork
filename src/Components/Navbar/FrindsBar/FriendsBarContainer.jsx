import FriendsBar from './FriendsBar'
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        FriendsBarState: state.NavbarPage.FriendsBarData
    }
}

const FriendsBarContainer = connect(mapStateToProps, null)(FriendsBar)

export default FriendsBarContainer