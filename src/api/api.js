import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ba7389f4-f9ee-4f28-9362-bb7de9d220d9'
    },
})

export const usersAPI = {
    getUsers(currentPage= 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    deleteFollowUsers(userID) {
        return instance.delete(`follow/${userID}`).then(response => {
            return response.data
        })
    },
    postFollowUsers(userID) {
        return instance.post(`follow/${userID}`).then(response => {
            return response.data
        })
    }
}


