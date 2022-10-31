import { Text, View, StyleSheet } from 'react-native';
import ScreenTemplate from './ScreenTemplate';

const SettingsScreen = () => {
  return (
    <ScreenTemplate>
      <View>
        <Text style={styles.title}>Settings</Text>
      </View>
    </ScreenTemplate>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    margin: 100,
  },
});
