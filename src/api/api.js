import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7c9d7314-aec1-454a-8ed1-5203121045b9'
    },
})

export const usersAPI = {
    getUsers(currentPage= 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
            return response.data;
        })
    },
    deleteFollowUsers(userID) {
        return instance.delete(`follow/${userID}`)
    },
    postFollowUsers(userID) {
        return instance.post(`follow/${userID}`)
    },
    getProfile (userID) {
        return instance.get(`profile/${userID}`)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}


