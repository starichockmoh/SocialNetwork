import {ActionsType} from "../../Types/Types";

type NewsPostType = {
    Text: string
    id: number
    Avtor: string
    Img: string
}
export type InitialStateNewsType = {
    NewsPost: Array<NewsPostType>
    NewsNewsText: string
}
let InitialState: InitialStateNewsType = {
    NewsPost: [
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 1, Avtor: 'Vasya Totechkin', Img: ''},
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 2, Avtor: 'Vasya Totechkin', Img: ''},
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 3, Avtor: 'Vasya Totechkin', Img: ''},
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 4, Avtor: 'Vasya Totechkin', Img: ''},
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 5, Avtor: 'Vasya Totechkin', Img: ''},
    ],
    NewsNewsText: 'hey'
}


const NewsReducer = (state = InitialState, action: NewsActionsType): InitialStateNewsType => {
    switch (action.type) {
        case "ADD_NEWS": {
            let NewPost = {
                Text: state.NewsNewsText,
                Id: 5,
                Img: '',
                Avtor: 'Salam'
            }
            return {
                ...state,
                NewsNewsText: '',
                NewsPost: [...state.NewsPost, NewPost] as Array<NewsPostType>
            }
        }
        case "UPDATE_NEWS":
            return {
                ...state,
                NewsNewsText: action.newText
            }
        default:
            return state
    }
}
export type NewsActionsType = ActionsType<typeof NewsActions>

export const NewsActions = {
    addNewPost: () => ({type: "ADD_NEWS"} as const),
    addNewText: (text: string) => ({type: "UPDATE_NEWS", newText: text} as const)
}

export default NewsReducer