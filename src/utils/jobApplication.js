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
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data : application
  })
}