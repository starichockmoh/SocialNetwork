import * as axios from "axios";

const AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '4edd74e2-330b-411c-8c39-ff31c4d6ced4'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const DialogsApi = {
    PutDialog(userId) {
        return AxiosInstance.put(`dialogs/${userId}`)
    },
    GetDialogs() {
        return AxiosInstance.get('dialogs')
    },
    GetUserDialog(userId) {
        let url = 'dialogs/' + userId +'/messages'
        return AxiosInstance.get(url)
    },
    PutMessage(userId, message) {
        let url = 'dialogs/' + userId +'/messages'
        return AxiosInstance.post(url,{body: message})
    },
    DeleteMessage (messageId) {
        return AxiosInstance.delete(`dialogs/messages/${messageId}`)
    }
}

export const Captcha = () => {
    return AxiosInstance.get('security/get-captcha-url')

}
export const AuthAPI = {
    AuthUser() {
        return AxiosInstance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    AuthLogin(email,password,rememberMe,captcha=null){
        return AxiosInstance.post(`auth/login`, {email,password,rememberMe,captcha})
    },
    AuthLogOut(){
        return AxiosInstance.post(`auth/logout`)

    }
}

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10,friend = null,term='') {
        return AxiosInstance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}&term=${term}`)
            .then(response => {
                    return response.data
                }
            )
    },
    followUser(userId) {
        return AxiosInstance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })

    },
    unfollowUser(userId) {
        return AxiosInstance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return AxiosInstance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })

    },
    getProfileStatus(userId){
        return AxiosInstance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus (status){
        return AxiosInstance.put(`profile/status/`,{status: status})
    },
    changeProfile(userId, profile){
        return AxiosInstance.put(`profile`,{userId, ...profile})
            .then(response => {
                return response.data
            })
    },
    changeMainPhoto(photo){
        const formData = new FormData()
        formData.append("image", photo)
        return AxiosInstance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
