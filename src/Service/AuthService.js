// import axios from 'axios';

// export const login=async(data)=>{
//     return await axios.post("http://localhost:8080/api/v1.0/login",data)
// }
import api from "../api/axios";


export const login = async (data) => {
  return await api.post("/login", data);
};