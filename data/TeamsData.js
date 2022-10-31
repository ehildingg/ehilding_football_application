import Team from '../models/Team';

export const TEAMS = [
  new Team(1, 'Liverpool', 'England', 1, require('../assets/images/Liverpool-FC-icon.png')),
  new Team(
    2,
    'Manchester United',
    'England',
    1,
    require('../assets/images/Manchester-United-icon.png')
  ),
  new Team(
    3,
    'Manchester City',
    'England',
    1,
    require('../assets/images/Manchester-City-icon.png')
  ),
  new Team(4, 'Chelsea', 'England', 1, require('../assets/images/Chelsea-FC-icon.png')),
  new Team(5, 'Arsenal', 'England', 1, require('../assets/images/Arsenal-FC-icon.png')),

  new Team(6, 'Barcelona', 'Spain', 2, require('../assets/images/dummy_ball.png')),
  new Team(7, 'Real Madrid', 'Spain', 2, require('../assets/images/dummy_ball.png')),
  new Team(8, 'Atletico Madrid', 'Spain', 2, require('../assets/images/dummy_ball.png')),
  new Team(9, 'Atletic Bilbao', 'Spain', 2, require('../assets/images/dummy_ball.png')),
  new Team(10, 'Real Sociedad', 'Spain', 2, require('../assets/images/dummy_ball.png')),

  new Team(11, 'Juventus', 'Italy', 3, require('../assets/images/dummy_ball.png')),
  new Team(12, 'AC Milan', 'Italy', 3, require('../assets/images/dummy_ball.png')),
  new Team(13, 'Napoli', 'Italy', 3, require('../assets/images/dummy_ball.png')),
  new Team(14, 'Inter Milan', 'Italy', 3, require('../assets/images/dummy_ball.png')),
  new Team(15, 'Lazio', 'Italy', 3, require('../assets/images/dummy_ball.png')),

  new Team(16, 'Dortmund', 'Germany', 4, require('../assets/images/dummy_ball.png')),
  new Team(17, 'Bayern Munchen', 'Germany', 4, require('../assets/images/dummy_ball.png')),
  new Team(18, 'Werder Bremen', 'Germany', 4, require('../assets/images/dummy_ball.png')),
  new Team(19, 'RB Leipzig', 'Germany', 4, require('../assets/images/dummy_ball.png')),
  new Team(20, 'Schalke 04', 'Germany', 4, require('../assets/images/dummy_ball.png')),

  new Team(21, 'PSG', 'France', 5, require('../assets/images/dummy_ball.png')),
  new Team(22, 'Marseille', 'France', 5, require('../assets/images/dummy_ball.png')),
  new Team(23, 'Lyon', 'France', 5, require('../assets/images/dummy_ball.png')),
  new Team(24, 'Monaco', 'France', 5, require('../assets/images/dummy_ball.png')),
  new Team(25, 'Lille', 'France', 5, require('../assets/images/dummy_ball.png')),
];
