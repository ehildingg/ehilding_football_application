import { View, StyleSheet, FlatList } from 'react-native';
import { LEAGUES } from '../data/LeaguesData';
import LeagueItem from '../components/ui/LeagueItem';
import ScreenTemplate from './ScreenTemplate';
import AppHeader from '../components/ui/AppHeader';

const StartScreen = ({ navigation }) => {
  const renderLeagueItem = (league) => {
    const onLeagueSelectedHandler = () => {
      navigation.navigate('Teams', { league: league.item });
    };
    return <LeagueItem item={league.item} onPress={onLeagueSelectedHandler} />;
  };

  return (
    <ScreenTemplate>
      <AppHeader>Forza ⚽️</AppHeader>
      <View style={styles.screen}>
        <FlatList
          data={LEAGUES}
          keyExtractor={(league) => league.id}
          renderItem={renderLeagueItem}
        />
      </View>
    </ScreenTemplate>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    margin: 20,
  },
  screen: {
    flex: 1,
    textAlign: 'center',
  },
});
