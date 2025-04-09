import { Routes } from '@angular/router';
import { NasaFeedComponent } from './pages/nasa-feed/nasa-feed.component';
import { MissionRequestComponent } from './pages/mission-request/mission-request.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'nasa-feed', component: NasaFeedComponent },
  { path: 'mission-request', component: MissionRequestComponent },
  { path: '**', redirectTo: '' }, // Wildcard route for 404 handling
];