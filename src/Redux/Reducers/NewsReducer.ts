const UPDATE_NEWS = 'UPDATE_NEWS'
const ADD_NEWS = 'ADD_NEWS'

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
    NewsNewsText : 'hey'
}


const NewsReducer = (state = InitialState, action:ActionsType):InitialStateNewsType => {
    switch (action.type) {
        case ADD_NEWS: {
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
        case UPDATE_NEWS:
            return {
                ...state,
                NewsNewsText: action.newText
            }
        default:
            return state
    }
}
type ActionsType = addNewPostActionType | addNewTextActionType
type addNewPostActionType = {
    type: typeof ADD_NEWS
}
type addNewTextActionType = {
    type: typeof UPDATE_NEWS
    newText: string
}
export const addNewPost = ():addNewPostActionType => ({type: ADD_NEWS})
export type addNewPostType = typeof addNewPost
export const addNewText = (text:string):addNewTextActionType => ({
    type: UPDATE_NEWS,
    newText: text
})
export type addNewTextType = typeof addNewText

export default NewsReducer