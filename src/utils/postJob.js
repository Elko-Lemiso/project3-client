import Axios from 'axios';
import qs from 'qs'; 

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    // headers: { 'content-type': 'application/x-www-form-urlencoded' }, better in axios function otherwise its not returning to original function
});

export const addJob = (job)=>{
  return axios({
    method: "POST",
    url: `jobs/postJob`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }, 
    data: qs.stringify(job)
  }).then((response=>{
      return response
  }))
}

export const editJob = (change) =>{
  return axios({
    method: 'POST',
    url: `jobs/editJob`,
    headers: { 'content-typ': 'multipart/form-data' },
    data: change 
  })
}


export const editJobImage = (change) =>{
  return axios({
    method: 'POST',
    url: `jobs/editJob/images`,
    headers: { 'content-typ': 'multipart/form-data' },
    data: change
  })
}
