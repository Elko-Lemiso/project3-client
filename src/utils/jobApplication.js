import Axios from 'axios';
import qs from 'qs'; 

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    // headers: { 'content-type': 'application/x-www-form-urlencoded' }, better in axios function otherwise its not returning to original function
});

export const jobApplication = (application)=>{
  return axios({
    method: "POST",
    url: `jobs/application`,
    data : application
  })
}

export const jobApplicationMessage = (startConversation)=>{
  return axios({
    method: "POST",
    url: `conversations/startconversation`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(startConversation)
  })
}

export const assignTheCleaner = (application)=> {
  return axios({
    method: "POST",
    url: `jobs/applicationResponse`,
    data: application
  })
}

