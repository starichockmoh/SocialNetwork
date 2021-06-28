

export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PostType = {
    message: string
    id: number
    likecount: number
}
export type ContactsType = {
    [key: string]: string;
    [key: number]: string;
    ['github']: string
    ['vk']: string
    ['facebook']: string
    ['instagram']: string
    ['twitter']: string
    ['website']: string
    ['youtube']: string
    ['mainLink']: string
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type DialogsType = {
    hasNewMessages: boolean
    id: number
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
    userName: string
}
export type MessagesType = {
    addedAt: string
    body: string
    id: string
    recipientId: number
    senderId: number
    senderName: string
    translatedBody: null
    viewed: boolean
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type NullableType<MT> = null | MT

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export type ActionsType<T extends {[key: string]: (...arg: any[]) => any} > = ReturnType<PropertiesType<T>>






