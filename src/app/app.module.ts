import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // <-- ADD THIS
import { HttpClientModule } from '@angular/common/http'; // <-- needed for API calls

import { AppComponent } from './app.component';
import { NasaFeedComponent } from './pages/nasa-feed/nasa-feed.component';
import { MissionRequestComponent } from './pages/mission-request/mission-request.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NasaFeedComponent,
    MissionRequestComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // <-- ADD THIS
    HttpClientModule     // <-- ADD THIS if you’re using HttpClient
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}