import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getNearbyHealthcare } from '../../api/GoogleMapsSearch';
import Geolocation from 'react-native-geolocation-service';

const NearbyHealthCareScreen = () => {
  const [healthcare, setHealthcare] = useState([])

  useEffect(() => {
    let establishPermissions = async () => {
      return await Geolocation.requestAuthorization('whenInUse')
    }

    establishPermissions().then(
      Geolocation.getCurrentPosition((pos) => {
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

  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default NearbyHealthCareScreen;