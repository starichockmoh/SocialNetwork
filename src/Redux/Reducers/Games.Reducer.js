const ADD_GAME = 'ADD_GAME'


let InitialState = {
    GamesPosts:
        [
            {Post: 'Terraria', author: 'Nick Cage'},
            {Post: 'MainCraft', author: 'Nick Salam'},
            {Post: 'Call of Dute', author: 'Joe Pat'},
            {Post: 'Pixes', author: 'Nick Cage'},
        ],
    NewGamePostText: ''
}

let GamesReducer = (state = InitialState, action) => {
    switch (action.type){
        case ADD_GAME:
            let NewPostGame = {
                Post: state.NewGamePostText,
                author: 'Kilk Milk'
            }
            state.GamesPosts.push(NewPostGame)
            state.NewGamePostText = ''
            return state
        case UPDATE_TEXT:
            state.NewGamePostText = action.newText
            return state
        default:
            return state
    }
}

export const AddGameActionCreator = () => ({type: ADD_GAME})
export const UpdateGameTextActionCreator = (text) => ({
    type: UPDATE_TEXT,
    newText: text
})

export default GamesReducer