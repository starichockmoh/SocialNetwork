const UPDATE_NEWS = 'UPDATE_NEWS'
const ADD_NEWS = 'ADD_NEWS'


let InitialState = {
    NewsPost: [
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 1, Avtor: 'Vasya Totechkin', Img: ''},
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 2, Avtor: 'Vasya Totechkin', Img: ''},
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 3, Avtor: 'Vasya Totechkin', Img: ''},
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 4, Avtor: 'Vasya Totechkin', Img: ''},
        {Text: 'Сегодня баба Нюра засолила огурцы', id: 5, Avtor: 'Vasya Totechkin', Img: ''}
    ],
    NewsNewsText : 'hey'
}


const NewsReducer = (state = InitialState, action) => {
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
                NewsPost: [...state.NewsPost, NewPost]
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


export const addNewPost = () => ({type: ADD_NEWS})
export const addNewText = (text) => ({
    type: UPDATE_NEWS,
    newText: text
})

export default NewsReducer