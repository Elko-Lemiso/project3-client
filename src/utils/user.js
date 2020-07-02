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

export const updateUserData = (userProfileChange)=>{
  debugger
  var stringifiedUserProfileChange = JSON.stringify(userProfileChange);
  return axios({
    method: 'POST',
    url: `users/editprofile`,
    headers:  { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(stringifiedUserProfileChange) // using qs to put the js object into the right format
  })
}

// export const updateProfilePicture = (profilePicture) =>{
//   debugger
//   return axios({
//     method: 'POST',
//     url: `users/editprofilepicture`,
//     headers: { 'content-typ': 'multipart/form-data' },
//     data: profilePicture 
//   })
// }