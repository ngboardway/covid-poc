import React, { useState, useEffect } from 'react';
import { getNearbyHealthcare, getPlaceDetails } from '../../api/GoogleMapsSearch';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';

const NearbyHealthCareScreen = () => {
  const [healthcare, setHealthcare] = useState([])
  const [region, setRegion] = useState({
    latitude: 17.33233141, longitude: -122.0312186, latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  const getFullPlaceDetails = async (placeId) => {
    return await getPlaceDetails(placeId);
  }

  const findProviders = async (lat, lng) => {
    const providerResults = await getNearbyHealthcare(lat, lng);
    let providers = [];

    for (var i = 0; i < providerResults.results.length; i++) {
      var r = providerResults.results[i];
      const { lat, lng } = r.geometry.location;
      let coord = {
        latitude: lat,
        longitude: lng
      }

      let title = r.name;
      let placeId = r.place_id;

      const details = await getFullPlaceDetails(placeId);
      let description = details.result.formatted_address;

      let entry = {
        coord,
        title,
        description,
        placeId
      };

      providers.push(entry);
    }

    return providers;
  }

  useEffect(() => {
    let establishPermissions = async () => {
      return await Geolocation.requestAuthorization('whenInUse')
    }

    establishPermissions().then(
      Geolocation.getCurrentPosition((pos) => {
        const rg = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };

        const updatedRegion = {
          ...region,
          ...rg
        }

        setRegion(updatedRegion);

        findProviders(rg.latitude, rg.longitude).then((markers) => {
          setHealthcare(markers);
        })

      }, (err) => {
        console.log(err);
      })
    ).catch((e) => {
      console.log(e)
    })
  }, [])

  return (
    <MapView
      region={region}
      showsUserLocation={true}
      style={{ flex: 1 }}>
      {healthcare.map(h => (
        <Marker
          coordinate={h.coord}
          title={h.title}
          description={h.description}
          identifier={h.placeId}
          description={h.description} />
      ))}
    </MapView>
  )
}

export default NearbyHealthCareScreen;