import axios from "axios";

const axiosGet = (path)=>{
   return axios.get(path).then(res=>res.status === 200 ? res.data : false).catch(e=>false);
}

const get = (path)=>{
  return axiosGet(path).then(res=>{
     if(res !== false ){
         return res
     }else{
         throw new Error("Error Api");
     }
  });
}


export {get};