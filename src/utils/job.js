import Axios from 'axios';

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    // headers: { 'content-type': 'application/x-www-form-urlencoded' }, better in axios function otherwise its not returning to original function
});

export const findJob = (job)=>{
  return axios({
    method: "GET",
    url: `jobs/findjob/${job}`,
  })
}
