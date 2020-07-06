import Axios from 'axios';
import qs from 'qs'; 

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    // headers: { 'content-type': 'application/x-www-form-urlencoded' }, better in axios function otherwise its not returning to original function
});

export const postMessage = (message)=>{
  return axios({
    method: "POST",
    url: "chats/postmessage",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(message) // using qs to put the js object into the right format
  })
}

export const getMessages = (message)=>{
  return axios({
    method: "POST",
    url: "chats/postmessage",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(message) // using qs to put the js object into the right format
  })
}