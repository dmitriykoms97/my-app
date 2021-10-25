import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '58116fc9-ed05-491d-aecb-342d6b37ccba'
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
        console.warn('Obsolete method. Please use profileAPI!')
        return profileAPI.getProfile(userID)
    }
}

export const profileAPI = {
    getProfile (userID) {
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    },
    savePhoto(file) {

        const formData = new FormData();
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(data) {
        return instance.post('auth/login', data)
    },
    logout() {
        return instance.delete('auth/login')
    }
}


