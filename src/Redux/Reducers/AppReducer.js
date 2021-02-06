import {authUser} from "./AuthReducer";


const INITIALIZED_SUCCESS = 'APP_INITIALIZED_SUCCESS'

let InitialState = {
    initialized: false
}

let AppReducer = (state = InitialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializedApp = () => {
    return (dispatch) => {
        let promise = dispatch(authUser())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}


export default AppReducer