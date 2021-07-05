import axios from "axios";
import {DialogsType, MessagesType, PhotosType, ProfileType, ResultCodesEnum, UserType} from "../Types/Types";


const AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '7eeb8e18-0506-4750-a69b-1c9673660d1c'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
})

type PutDialogResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type GetDialogsResponseType = Array<DialogsType>
type GetUserDialogResponseType = {
    error: null | string
    totalCount: number
    items: Array<MessagesType>
}
type PutMessageResponseType = {
    resultCode: ResultCodesEnum
    data: { message: MessagesType }
    messages: Array<string>
}
type DeleteMessageResponseType = {
    messages: Array<string>
    resultCode: ResultCodesEnum
}


export const DialogsApi = {
    async PutDialog(userId: number) {
        const res = await AxiosInstance.put<PutDialogResponseType>(`dialogs/${userId}`)
        return res.data
    },
    async GetDialogs() {
        const res = await AxiosInstance.get<GetDialogsResponseType>('dialogs')
        return res.data
    },
    async GetUserDialog(userId: string, page: string) {
        const url = `dialogs/${userId}/messages?page=${page}&count=10`
        const res = await AxiosInstance.get<GetUserDialogResponseType>(url)
        return res.data
    },
    async PutMessage(userId: string, message: string) {
        const url = 'dialogs/' + userId + '/messages'
        const res = await AxiosInstance.post<PutMessageResponseType>(url, {body: message})
        return res.data
    },
    async DeleteMessage(messageId: string) {
        const res = await AxiosInstance.delete<DeleteMessageResponseType>(`dialogs/messages/${messageId}`)
        return res.data
    }
}


type AuthUserResponseType = {
    messages: Array<string>
    resultCode: ResultCodesEnum
    data: {
        id: number
        email: string
        login: string
    }
}
type LoginResponseType = {
    messages: Array<string>
    resultCode: ResultCodesEnum
    data: {
        userId: number

    }
}
type LogoutResponseType = {
    messages: Array<string>
    resultCode: ResultCodesEnum
}
type CaptchaResponseType = {
    url: string
}
export const AuthAPI = {
    AuthUser() {
        return AxiosInstance.get<AuthUserResponseType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    AuthLogin(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return AxiosInstance.post<LoginResponseType>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data)
    },
    AuthLogOut() {
        return AxiosInstance.post<LogoutResponseType>(`auth/logout`).then(res => res.data)

    },
    Captcha() {
        return AxiosInstance.get<CaptchaResponseType>('security/get-captcha-url').then(res => res.data)
    }
}


type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}
type GetProfileResponseType = ProfileType
type GetStatusResponseType = string
type UniversalProfileResponseType = {
    resultCode: number
    messages: Array<string>
}
type ChangeMainPhotoResponseType = {
    resultCode: number
    messages: Array<string>
    data: { photos: PhotosType }
}
export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10, friend = false, term = '') {
        return AxiosInstance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&friend=${friend}&term=${term}`)
            .then(response => {
                    return response.data
                }
            )
    },
    followUser(userId: number) {
        return AxiosInstance.post<UniversalProfileResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })

    },
    unfollowUser(userId: number) {
        return AxiosInstance.delete<UniversalProfileResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId: string | number | null) {
        return AxiosInstance.get<GetProfileResponseType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })

    },
    getProfileStatus(userId: string | number | null) {
        return AxiosInstance.get<GetStatusResponseType>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return AxiosInstance.put<UniversalProfileResponseType>(`profile/status/`, {status: status}).then(res => res.data)
    },
    changeProfile(userId: number, profile: ProfileType) {
        return AxiosInstance.put<UniversalProfileResponseType>(`profile`, {...profile})
            .then(response => {
                return response.data
            })
    },
    changeMainPhoto(photo: any) {
        const formData = new FormData()
        formData.append("image", photo)
        return AxiosInstance.put<ChangeMainPhotoResponseType>(`profile/photo`, formData
        ).then(res => res.data)
    }
}
