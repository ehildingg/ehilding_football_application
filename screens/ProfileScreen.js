import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  Platform,
  Image,
  ScrollView,
} from 'react-native';

import Spinner from '../components/ui/Spinner';
import * as Location from 'expo-location';
import { getWeather } from '../utilities/http';
import AppHeader from '../components/ui/AppHeader';

import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate';

const ProfileScreen = () => {
  const { styles } = myStyles();

  const [isLoading, setIsLoading] = useState(true);

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync();
        const currentGPStLocation = await getWeather(
          location.coords.latitude,
          location.coords.longitude
        );

        setCurrentLocation(currentGPStLocation);
      }
      setIsLoading(false);
    })();
  }, []);

  const onSaveProfile = () => {
    console.log('Spara Profil');
  };

  let content;
  content = (
    <ScreenTemplate>
      <AppHeader>Forza ⚽️ - Profile</AppHeader>
      <ScrollView>
        <View style={styles.screen}>
          <View style={styles.mainContainer}>
            <View style={styles.profileContainer}>
              <View style={styles.container}>
                <Text style={styles.playerName}>Profile Name</Text>
                <Image
                  style={styles.image}
                  source={require('../assets/images/footballer-icon.png')}
                />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Country: Sweden</Text>
                <Text style={styles.infoText}>Age: 28</Text>
                <Text style={styles.infoText}>Current Location: {currentLocation?.name}</Text>
              </View>

              <Pressable onPress={onSaveProfile}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Spara Profil</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenTemplate>
  );

  if (isLoading) {
    return <Spinner text="Vänta, hämtar GPS Position" />;
  }

  return content;
};

export default ProfileScreen;

const myStyles = () => {
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    mainContainer: {},
    profileContainer: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 50,
      // marginLeft: width < 500 ? null : 10,
      alignItems: 'center',
      flexDirection: width < 500 ? 'column' : 'row',
    },
    buttonContainer: {
      borderColor: '#000000',
      borderRadius: 10,
      backgroundColor: Platform.select({ ios: '#002aff', android: '#3bae0d' }),
      padding: 8,
      opacity: 0.6,
    },
    buttonText: {
      fontSize: 18,
      color: '#f4f4f4',
    },

    container: {
      alignItems: 'center',
      padding: 20,
    },
    playerName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.primaryText,
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.842)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 10,
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginVertical: 30,
      borderRadius: 175,
      borderWidth: 2,
      borderColor: Colors.primaryText,
    },
    infoContainer: {
      alignItems: 'flex-start',
      backgroundColor: Colors.secondaryBackground,
      opacity: 0.9,
      borderWidth: 2,
      borderColor: Colors.borderColor,
      marginHorizontal: '10%',
      padding: 10,
      marginBottom: 15,
      borderRadius: Platform.select({ ios: 2, android: 10 }),
      maxWidth: width < 500 ? null : 300,
    },
    infoText: {
      fontSize: 24,
    },
  });

  return { styles };
};
