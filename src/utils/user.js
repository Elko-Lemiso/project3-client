import Axios from 'axios';
import qs from 'qs'; 

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    // headers: { 'content-type': 'application/x-www-form-urlencoded' }, better in axios function otherwise its not returning to original function
});

export const userData = (user)=>{
  return axios({
    method: "GET",
    url: `users/${user}`,
  })
}

export const allCleanersData = ()=>{
  return axios({
    method: "GET",
    url: `users/allcleaners`,
  })
}


export const updateUserDataRequest = (userProfileChange)=>{
  return axios({
    method: 'POST',
    url: `users/editprofile`,
    headers:  { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(userProfileChange)
  })
}

export const updateProfilePictureRequest = (profilePicture, user) =>{
  return axios({
    method: 'POST',
    url: `users/editprofilepicture/${user}`,
    headers: { 'content-typ': 'multipart/form-data' },
    data: profilePicture 
  })
}