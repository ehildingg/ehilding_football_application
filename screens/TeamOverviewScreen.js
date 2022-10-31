import { View, FlatList } from 'react-native';

import { useLayoutEffect } from 'react';
import { PLAYERS } from '../data/PlayersData';
import PlayerItem from '../components/ui/PlayerItem';
import ScreenTemplate from './ScreenTemplate';
import AppHeader from '../components/ui/AppHeader';

const TeamOverviewScreen = ({ route, navigation }) => {
  const team = route.params.team;

  const displayedPlayers = PLAYERS.filter((player) => {
    return player.teamId === team.id;
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title: team.name });
  }, [navigation, team]);

  const renderPlayerItem = (player) => {
    const onPlayerSelectedHandler = () => {
      console.log('Test Klick på Spelare');
      navigation.navigate('PlayerDetails', { player: player.item });
    };
    return (
      <View>
        <PlayerItem item={player.item} onPress={onPlayerSelectedHandler} />
      </View>
    );
  };

  return (
    <ScreenTemplate>
      <AppHeader>Forza ⚽️</AppHeader>
      <View>
        <FlatList
          data={displayedPlayers}
          keyExtractor={(player) => player.id}
          renderItem={renderPlayerItem}
        />
      </View>
    </ScreenTemplate>
  );
};

export default TeamOverviewScreen;
