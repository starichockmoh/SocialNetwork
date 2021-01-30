// import ProfileReducer from "./Reducers/ProfileReducer";
// import DialogReducer from "./Reducers/DialogsReducer";
// import NewsReducer from "./Reducers/NewsReducer";
// import NavbarReducer from "./Reducers/NavbarReducer";
//
//
// let Store = {
//     _State: {
//         ProfilePage: {
//             PostsData: [
//                 {message: 'Heil Hitler', id: 1, likecount: 1488},
//                 {message: 'salam', id: 2, likecount: 228},
//             ],
//             NewPostText: ''
//         },
//         DialogsPage: {
//             DialogsData: [
//                 {
//                     Img: 'https://i12.fotocdn.net/s124/7d077c09f4b27b65/gallery_xl/2824373953.jpg',
//                     Name: 'Ванек',
//                     id: 1,
//                     OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg'
//                 },
//                 {
//                     Img: 'http://s3.fotokto.ru/photo/full/281/2819005.jpg',
//                     Name: 'Братик',
//                     id: 2,
//                     OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg'
//                 },
//                 {Img: 'https://www.photoforum.ru/f/photo/000/774/774816_50.jpg', Name: 'Пахан', id: 3, OnOf: 'of'},
//                 {
//                     Img: 'https://get.pxhere.com/photo/man-boy-model-blue-clothing-neck-sunglasses-glasses-eyewear-aviator-photo-shoot-sensolatino-vision-care-white-collar-worker-1278226.jpg',
//                     Name: 'Данил',
//                     id: 4,
//                     OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg'
//                 },
//                 {
//                     Img: 'https://get.wallhere.com/photo/black-background-sunglasses-glasses-fingers-man-hand-muscle-hairstyle-football-player-tennis-player-facial-hair-wrestler-eyewear-613569.jpg',
//                     Name: 'Света',
//                     id: 5,
//                     OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg'
//                 },
//                 {Img: 'https://f3.mylove.ru/J1NuDGy2QF.jpg', Name: 'Кефир', id: 6, OnOf: 'of'},
//                 {
//                     Img: 'https://sun9-68.userapi.com/c638031/v638031076/baa0/mIIa28ICfK8.jpg',
//                     Name: 'Магазин',
//                     id: 7,
//                     OnOf: 'of'
//                 },
//                 {
//                     Img: 'https://get.wallhere.com/photo/face-model-glasses-actor-dog-fashion-cool-man-photoshoot-male-photo-shoot-vision-care-interaction-facial-hair-josh-duhamel-581315.jpg',
//                     Name: 'Федя',
//                     id: 8,
//                     OnOf: 'of'
//                 },
//                 {
//                     Img: 'https://ves-rf.ru/sites/default/files/article-img/20140424/putin-v-ochkah1.jpg',
//                     Name: 'Нагибатор',
//                     id: 9,
//                     OnOf: 'of'
//                 },
//                 {
//                     Img: 'https://pbs.twimg.com/profile_images/495205584040259586/EQoA3nOm.jpeg',
//                     Name: 'Угнетатель ',
//                     id: 10,
//                     OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg'
//                 },
//                 {
//                     Img: 'https://get.wallhere.com/photo/white-black-monochrome-portrait-sunglasses-glasses-photography-music-Studio-shades-Rayban-cool-man-beard-male-black-and-white-monochrome-photography-vision-care-facial-hair-eyewear-722192.jpg',
//                     Name: 'Мать',
//                     id: 11,
//                     OnOf: 'of'
//                 },
//
//             ],
//             MessagesData: {
//                 MyMessages: [
//                     {message: 'Шалом', id: 1},
//                     {message: 'Фарту по жизни', id: 2},
//                 ], FriendMessages: [
//                     {message: 'Где деньги', id: '1'},
//
//                 ]
//             },
//             NewMessText: ''
//         },
//         NavbarPage: {
//             FrindsBarData: [
//                 {
//                     Img: 'https://i.pinimg.com/736x/7e/ee/0a/7eee0a15c3bb16b777c64116e8cfaafe.jpg',
//                     Name: 'Danil',
//                     OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg',
//                     id: 45
//                 },
//                 {
//                     Img: 'https://i.pinimg.com/736x/89/57/16/8957167672cdfdb7fba47ef531f7a3eb.jpg',
//                     Name: 'Sveta',
//                     OnOf: 'of',
//                     id: 13
//                 },
//                 {
//                     Img: 'https://i.pinimg.com/originals/6c/b6/4c/6cb64c7f040e63059639a6df25969588.jpg',
//                     Name: 'Kalim',
//                     OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg',
//                     id: 12
//                 }
//             ]
//         },
//         NewsPage: {
//             NewsPost: [
//                 {Text: 'Сегодня баба Нюра засолила огурцы', Id: '1', Avtor: 'Vasya Totechkin', Img: ''},
//                 {Text: 'Сегодня баба Нюра засолила огурцы', Id: '1', Avtor: 'Vasya Totechkin', Img: ''},
//                 {Text: 'Сегодня баба Нюра засолила огурцы', Id: '1', Avtor: 'Vasya Totechkin', Img: ''},
//                 {Text: 'Сегодня баба Нюра засолила огурцы', Id: '1', Avtor: 'Vasya Totechkin', Img: ''},
//                 {Text: 'Сегодня баба Нюра засолила огурцы', Id: '1', Avtor: 'Vasya Totechkin', Img: ''}
//             ],
//             NewsNewsText : ''
//         }
//     },
//     _callSubscriber() {
//         console.log('store changed')
//     },
//     getState() {
//         return this._State
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action){
//         this._State.ProfilePage = ProfileReducer(this._State.ProfilePage,action)
//         this._State.NewsPage = NewsReducer(this._State.NewsPage,action)
//         this._State.DialogsPage = DialogReducer(this._State.DialogsPage,action)
//         this._State.NavbarPage = NavbarReducer(this._State.NavbarPage,action)
//         this._callSubscriber(this.getState())
//     },
// }
//
//
// // export default Store