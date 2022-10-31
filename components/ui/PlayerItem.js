import { View, Text, Image, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import Colors from '../../utilities/constants/colors';

const PlayerItem = ({ item, onPress }) => {
  const { styles } = myStyles();
  return (
    <View style={styles.grid}>
      <Pressable onPress={onPress}>
        <View style={styles.playerContainer}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.playerInfoContainer}>
            <Text style={styles.playerName}>{item.name}</Text>
            <Text style={styles.playerInfo}>Nationality: {item.country}</Text>
            <Text style={styles.playerInfo}>Age: {item.age}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PlayerItem;

const myStyles = () => {
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    grid: {
      flex: 1,
      marginTop: 10,
    },
    image: {
      width: 120,
      height: width < 500 ? 120 : 140,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.borderColor,
      opacity: 0.9,
      marginLeft: 6,
    },
    playerContainer: {
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: Colors.secondaryBackground,
      opacity: 0.9,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: Colors.borderColor,
    },
    playerInfoContainer: {
      marginLeft: width < 500 ? 8 : 16,
    },
    playerInfo: {
      color: Colors.secondaryText,
      fontSize: width < 500 ? 16 : 24,

      marginBottom: 4,
    },
    playerName: {
      color: Colors.primaryText,
      fontSize: width < 500 ? 18 : 32,

      marginBottom: 4,
    },
  });

  return { styles };
};
