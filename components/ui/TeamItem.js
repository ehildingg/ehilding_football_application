import { View, Text, Image, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import Colors from '../../utilities/constants/colors';

const TeamItem = ({ item, onPress }) => {
  const { styles } = myStyles();

  return (
    <View style={styles.grid}>
      <Pressable onPress={onPress}>
        <View style={styles.teamContainer}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.teamName}>{item.name}</Text>
            <Text style={styles.teamInfo}>Country: {item.country}</Text>
            <Text style={styles.teamInfo}>Stadium: </Text>
            <Text style={styles.teamInfo}>Capacity: </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default TeamItem;

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
    teamContainer: {
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
    infoContainer: {
      marginLeft: width < 500 ? 8 : 16,
    },
    teamInfo: {
      color: Colors.secondaryText,
      fontSize: width < 500 ? 16 : 24,

      marginBottom: 4,
    },
    teamName: {
      color: Colors.primaryText,
      fontSize: width < 500 ? 18 : 32,

      marginBottom: 4,
    },
  });

  return { styles };
};
