import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
params:{
'api_key':'7497bb4379822ab47fbc3b0f4068b062'
}
  
});

export default axiosInstance;

