import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';

import { PremierLeagueComponent } from './premier-league/premier-league.component';

export const routes: Routes = [
  {
    path: '',
    component: PremierLeagueComponent,
    title: `Matches | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'premier-league',
    component: PremierLeagueComponent,
    title: `Premier League | ${SystemConstant.WEB_NAME}`,
  }
];
