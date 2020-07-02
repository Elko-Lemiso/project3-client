import Axios from 'axios';
import qs from 'qs'; 

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    // headers: { 'content-type': 'application/x-www-form-urlencoded' }, better in axios function otherwise its not returning to original function
});

export const signup = (user)=>{
  return axios({
    method: "POST",
    url: "users/signup",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(user) // using qs to put the js object into the right format
  })
  .then((response)=> {        
      setUser(response.data);
  })
}

export const login = (user)=>{
  return axios({
      method: 'POST',
      url: 'users/login',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(user) // using qs to put the js object into the right format
  })
  .then((response)=> {   
      setUser(response.data);
  })
}

export const logout = () => {
  return axios({
    method : 'GET',
    url : 'users/logout',
  })
  .then((response)=> { 
    console.log(response);     
    clearUserSession();
  })
}

export const clearUserSession = ()=> {
  window.localStorage.removeItem("user");
};

export const getUser = ()=> {
    return JSON.parse(window.localStorage.getItem('user'));
}

export const setUser = (user)=> {
    window.localStorage.setItem('user', JSON.stringify(user));
}


