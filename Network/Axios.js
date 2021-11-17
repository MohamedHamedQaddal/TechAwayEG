import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://api.androidhive.info',
    timeout: 5000,
    headers: {      
        'Access-Control-Allow-Origin': '*',       
        'Accept':'application/json',      
        'Content-Type':'application/json',    
    }   
});

export default axiosInstance