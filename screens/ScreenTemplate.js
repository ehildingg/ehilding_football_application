import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../utilities/constants/colors';

const ScreenTemplate = ({ children }) => {
  return (
    <LinearGradient style={styles.screen} colors={Colors.gradient}>
      <ImageBackground
        source={require('../assets/images/fotboll_background.jpg')}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
};
export default ScreenTemplate;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.8,
  },
});
