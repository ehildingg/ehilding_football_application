import { View, FlatList } from 'react-native';
import { TEAMS } from '../data/TeamsData';
import TeamItem from '../components/ui/TeamItem';
import { useLayoutEffect } from 'react';
import ScreenTemplate from './ScreenTemplate';
import AppHeader from '../components/ui/AppHeader';

const TeamsScreen = ({ route, navigation }) => {
  const league = route.params.league;

  useLayoutEffect(() => {
    navigation.setOptions({ title: league.name });
  }, [navigation, league]);

  const displayedTeams = TEAMS.filter((team) => {
    return team.leagueId === league.id;
  });

  const renderTeamItem = (team) => {
    const onTeamSelectedHandler = () => {
      navigation.navigate('TeamsOverview', { team: team.item });
    };
    return <TeamItem item={team.item} onPress={onTeamSelectedHandler} />;
  };

  return (
    <ScreenTemplate>
      <AppHeader>Forza ⚽️</AppHeader>
      <View>
        <FlatList
          data={displayedTeams}
          keyExtractor={(team) => team.id}
          renderItem={renderTeamItem}
        />
      </View>
    </ScreenTemplate>
  );
};

export default TeamsScreen;
