import axios from 'axios';
import { GOOGLE_MAPS_KEY } from './MapsKey';

const PlacesAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
});


PlacesAPI.interceptors.request.use(
  async (config) => {
    config.headers.Accept = 'application/json';
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  }, (err) => {
    return Promise.reject(err);
  }
)

export const getNearbyHealthcare = async (lat, long, callback) => {
  const response = await PlacesAPI.get(`?key=${GOOGLE_MAPS_KEY}&location=${lat},${long}&radius=1500&type=doctor`);
  callback(response.data);
};

export default PlacesAPI;