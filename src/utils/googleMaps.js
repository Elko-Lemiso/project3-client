import Axios from 'axios';
// import qs from 'qs'; 

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true,
});

export const geocode = (address)=>{
  console.log(address);
  return axios({
    method: "GET",
    url: `users/geolocation/${address}`
  })
}