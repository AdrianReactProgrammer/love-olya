import axios from 'axios'
import { uploadPhoto } from '../redux/profile-reducer'


const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  header: {
    "API=KEY": "f62be9f1-0f5f-4eae-a319-2f1338e9a669"
  }
})

export const authAPI = {
  auth() {
    return instance.get('auth/me').then(responce => responce.data)
  },
  login(values) {
    debugger
    return instance.post(`auth/login`, { ...values }).then(responce => responce.data)
  },
  logout() {
    return instance.delete(`auth/login`).then(responce => responce.data)
  }
}


export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(responce => responce.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(responce => responce.data)
  },
  setStatus(status) {
    return instance.put(`profile/status`, { status: status }).then(responce => responce.data)
  },
  uploadPhoto(imageFile) {
    const formData = new FormData()
    formData.append("image", imageFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'        
      }
    }).then(responce => responce.data)
  },
  changeProfileInfo(requestData) {
    debugger
    return instance.put('profile', {...requestData}).then(responce => responce.data)
  }
}

export const securityAPI = {
  getCaptcha() {
    return instance.get('security/get-captcha-url').then(responce => responce.data)
  }
}

export const usersAPI = {
  follow(userId) {
    return instance.post(`follow/${userId}`).then(responce => responce.data)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(responce => responce.data)
  },
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
  },
  updateUsersPage(pageNumber, pageSize) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(responce => responce.data)
  }
}

