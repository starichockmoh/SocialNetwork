

type NewsPostType = {
    Text: string
    id: number
    Title: string
    Img: Array<string>
    Data: string
}
export type InitialStateNewsType = {
    NewsPost: Array<NewsPostType>
}
let InitialState: InitialStateNewsType = {
    NewsPost: [
        {Text: 'Welcome to my first app!!! Unfortunately backend logic does not provide for news, but I did them in a simplified form.',
            id: 1,
            Img: ['','',''],
            Title: 'Welcome!', Data: '12.04.1970'},
        {Text: 'Новости из России. Сегодня в 6:00 по Москве в селе Бердымухамедушки бабушка Зина засослила огурцы, получив навар в виде 6-ти  банок. ' +
                'Очевидцы говорят, что этим делом злоумышленница занимается с прошлой весны. Заведено уголовное дело.',
            id: 2,
            Img: ['', ''],
            Title: 'Crime Russia',Data: '12.04.4059'}
    ],
}


const NewsReducer = (state = InitialState, action: any): InitialStateNewsType => {
    switch (action.type) {
        default:
            return state
    }
}

export default NewsReducer