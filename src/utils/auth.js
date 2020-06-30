import Axios from 'axios';
import qs from 'qs'; 

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export const login = (user)=>{
    return axios({
        method: 'POST',
        url: 'users/login',
        data: qs.stringify(user) // using qs to put the js object into the right format
    })
    .then((response)=> {
        console.log(response);      
        setUser(response.data);
    })
}

export const getUser = ()=> {
    return JSON.parse(window.localStorage.getItem('user'));
}
export const setUser = (user)=> {
    window.localStorage.setItem('user', JSON.stringify(user));
}


