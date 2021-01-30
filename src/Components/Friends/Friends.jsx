import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

const Friends = (props) => {
    return (
        <div>
        <div>Friends</div>
        </div>
    )
}

export default withAuthRedirect(Friends)