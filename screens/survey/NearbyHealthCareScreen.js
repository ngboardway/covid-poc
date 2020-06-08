import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getNearbyHealthcare } from '../../api/GoogleMapsSearch';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';

const NearbyHealthCareScreen = () => {
  const [healthcare, setHealthcare] = useState([])
  const [coords, setCoords] = useState({});

  useEffect(() => {
    let establishPermissions = async () => {
      return await Geolocation.requestAuthorization('whenInUse')
    }

    establishPermissions().then(
      Geolocation.getCurrentPosition((pos) => {
        setCoords(pos.coords);

        getNearbyHealthcare(pos.coords.latitude, pos.coords.longitude, (result) => {
          console.log(result);
        })
        // console.log(pos)
      }, (err) => {
        console.log(err);
      })
    ).catch((e) => {
      console.log(e)
    })
  }, [])

  const getInitialRegion = () => {
    return {
      region: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  const onRegionChange = (region) => {
    setRegion({ region });
  }

  const [region, setRegion] = useState(getInitialRegion());

  return (
    <View style={styles.container}>
      <MapView
        region={region}
        onRegionChange={onRegionChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default NearbyHealthCareScreen;