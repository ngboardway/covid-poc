import axios from 'axios';
import { GOOGLE_MAPS_KEY } from './MapsKey';

const PlacesAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/nearbysearch'
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

export const getNearbyHealthcare = async (lat, lon, callback) => {
  try {
    const response = await PlacesAPI.get(`json?location=${lat},${lon}&radius=1500&type=doctor&key=${GOOGLE_MAPS_KEY}`);
    callback(response.data);
  } catch (e) {
    console.log('Error response: ', e.response);
  }
};

export default PlacesAPI;