import League from '../models/League';

export const LEAGUES = [
  new League(1, 'Premier League', 'England', require('../assets/images/premier-league-3.png')),
  new League(2, 'La Liga', 'Spain', require('../assets/images/LaLiga.png')),
  new League(3, 'Serie A', 'Italy', require('../assets/images/Serie-A.png')),
  new League(4, 'Bundesliga', 'Germany', require('../assets/images/bundesliga.png')),
  new League(5, 'Ligue 1', 'France', require('../assets/images/Ligue1.png')),
];
