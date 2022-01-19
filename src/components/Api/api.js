import * as axios from "axios";

export const instance = axios.create ({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "e2482651-8916-4a00-921f-b7cba283c417"
    }
});

export const FriendsAPI = {
    getFriends (currentPage =1, pageSize =10 ) {
    return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}
}

export const FollowAPI = {
    postFollow (u) {
        return  instance.post(`follow/${u}`)
            .then(response => {
                return response.data;
            })
    }
}

export const UnfollowAPI = {
    deleteUnfollow (u) {
        return  instance.delete(`follow/${u}`)
            .then(response => {
                return response.data;
            })
    }
}

export const AuthAPI = {
    getAuth () {
        return  instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    login (email, password, rememberMe = false, captcha = null) {
        return  instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return  instance.delete(`auth/login`)
    }
}

export const ProfileAPI = {
    getProfile (userId) {
        return  instance.get(`profile/` + userId).then(response => {
                return response.data;
            })
    },
    getStatus (userId) {
        return  instance.get(`profile/status/` + userId)
    },
    updateProfileStatus (status) {
        return  instance.put(`profile/status`, {status: status})
    },
    savePfoto (photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return  instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile (profile){
        return  instance.put(`profile`, profile)
    }
}

export const securityAPI = {
   getCaptchaUrl () {
       return instance.get(`security/get-captcha-url`)
   }
}









