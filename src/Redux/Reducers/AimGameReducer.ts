import {ActionsType, NullableType} from "../../Types/Types";


let InitialState = {
    gameTime: 0,
    gameStart: false
}
type InitialStateType = typeof InitialState

export const AimGameReducer = (state= InitialState, action: AimActionsType) => {
    switch (action.type) {
        case "AIM_GAME/SET_GAME_TIME": {
            return {
                ...state,
                gameTime: action.time
            }
        }
        case "AIM_GAME/SET_GAME_START":
            return {
                ...state,
                gameStart: action.isStart
            }
        default: {
            return state
        }
    }
}

type AimActionsType = ActionsType<typeof AimActions>

export const AimActions = {
    SetGameTime: (time: number) => ({type: "AIM_GAME/SET_GAME_TIME", time: time} as const),
    SetGameStart: (isStart: boolean) => ({type: "AIM_GAME/SET_GAME_START", isStart: isStart} as const)
}