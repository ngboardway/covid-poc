import axios from 'axios';
import { GOOGLE_MAPS_KEY } from './MapsKey';

const PlacesAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place'
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

export const getNearbyHealthcare = async (lat, lon) => {
  try {
    const response = await PlacesAPI.get(`nearbysearch/json?location=${lat},${lon}&radius=1500&type=doctor&key=${GOOGLE_MAPS_KEY}`);
    return response.data;
  } catch (e) {
    console.log('Error response: ', e.response);
  }
};

export const getPlaceDetails = async (placeId) => {
  try {
    const response = await PlacesAPI.get(`details/json?place_id=${placeId}&fields=formatted_address,name,website&key=${GOOGLE_MAPS_KEY}`);
    return response.data;
  } catch (e) {
    console.log('Error response: ', e.response);
  }
}

export default PlacesAPI;