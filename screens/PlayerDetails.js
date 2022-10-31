import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { useLayoutEffect } from 'react';
import ScreenTemplate from './ScreenTemplate';
import AppHeader from '../components/ui/AppHeader';
import Colors from '../utilities/constants/colors';

const PlayerDetails = ({ route, navigation }) => {
  const player = route.params.player;

  useLayoutEffect(() => {
    navigation.setOptions({ title: player.name });
  }, [navigation, player]);

  const { styles } = myStyles();
  const { width } = useWindowDimensions();

  let portraitMode = (
    <ScreenTemplate>
      <AppHeader>Forza ⚽️</AppHeader>
      <ScrollView>
        <View style={styles.screen}>
          <View style={styles.container}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Image style={styles.image} source={player.image} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Country: {player.country}</Text>
            <Text style={styles.infoText}>Age: {player.age}</Text>
          </View>
        </View>
      </ScrollView>
    </ScreenTemplate>
  );

  let landscapeMode = (
    <ScreenTemplate>
      <AppHeader>Forza ⚽️</AppHeader>
      <ScrollView>
        <View style={styles.screen}>
          <View style={styles.container}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Image style={styles.image} source={player.image} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Country: {player.country}</Text>
            <Text style={styles.infoText}>Age: {player.age}</Text>
          </View>
        </View>
      </ScrollView>
    </ScreenTemplate>
  );

  if (width <= 500) {
    return portraitMode;
  } else {
    return landscapeMode;
  }
};

export default PlayerDetails;

const myStyles = () => {
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      flexDirection: width < 500 ? 'column' : 'row',
    },
    container: {
      alignItems: 'center',
      padding: 20,
      marginLeft: width < 500 ? null : '15%',
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
      alignItems: width < 500 ? 'flex-start' : 'center',
      backgroundColor: Colors.secondaryBackground,
      opacity: 0.9,
      borderWidth: 2,
      width: width < 500 ? null : '25%',
      borderColor: Colors.borderColor,
      marginHorizontal: '20%',
      padding: 10,
      marginVertical: width < 500 ? null : '8%',

      borderRadius: Platform.select({ ios: 2, android: 10 }),
    },
    infoText: {
      fontSize: 24,
    },
  });

  return { styles };
};
