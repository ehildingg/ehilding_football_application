import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utilities/constants/colors';

const AppHeader = ({ children }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 2,
    marginHorizontal: 50,
    padding: 5,
    marginBottom: 10,
  },
  headerText: {
    textAlign: 'center',
    color: Colors.primaryText,
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.842)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});
