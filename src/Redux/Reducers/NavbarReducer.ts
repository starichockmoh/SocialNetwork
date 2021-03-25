type FriendType = {
    Img: string
    Name: string
    OnOf: string
    id: number
}
type InitialStateType = {
    FriendsBarData: Array<FriendType>
}
let InitialState: InitialStateType = {
    FriendsBarData: [
        {
            Img: 'https://i.pinimg.com/736x/7e/ee/0a/7eee0a15c3bb16b777c64116e8cfaafe.jpg',
            Name: 'Danil',
            OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg',
            id: 45
        },
        {
            Img: 'https://i.pinimg.com/736x/89/57/16/8957167672cdfdb7fba47ef531f7a3eb.jpg',
            Name: 'Sveta',
            OnOf: 'of',
            id: 13
        },
        {
            Img: 'https://i.pinimg.com/originals/6c/b6/4c/6cb64c7f040e63059639a6df25969588.jpg',
            Name: 'Kalim',
            OnOf: 'https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg',
            id: 12,
        }
    ]
}

const NavbarReducer = (state:InitialStateType = InitialState,action:any):InitialStateType => {
    return state
}

export default NavbarReducer