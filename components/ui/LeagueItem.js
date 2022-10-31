import { View, Image, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import Colors from '../../utilities/constants/colors';

const LeagueItem = ({ item, onPress }) => {
  const { styles } = myStyles();

  return (
    <View style={styles.grid}>
      <Pressable onPress={onPress}>
        <View style={styles.leagueContainer}>
          <Image style={styles.image} source={item.image} />
        </View>
      </Pressable>
    </View>
  );
};

export default LeagueItem;

const myStyles = () => {
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    grid: {
      flex: 1,
      marginTop: 10,
    },
    image: {
      width: '100%',
      height: width < 500 ? 120 : 160,
      borderColor: Colors.borderColor,
      opacity: 0.8,
      marginHorizontal: 10,
      resizeMode: 'contain',
    },
    leagueContainer: {
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: Colors.secondaryBackground,
      opacity: 0.9,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: Colors.borderColor,
    },
    leagueName: {
      color: Colors.secondaryText,
      fontSize: 24,
      marginBottom: 4,
      fontWeight: 'bold',
    },
  });

  return { styles };
};
