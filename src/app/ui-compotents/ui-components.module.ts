import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules
import { SpPlaylistModule } from './sp-playlist/sp-playlist.module';

// Components
import { SpSearchbarComponent } from './sp-searchbar/sp-searchbar.component';
import { SpTrackCardComponent } from './sp-track-card/sp-track-card.component';

// Services
import { SpotifyQueriesService } from './../services/spotify-queries.service';

@NgModule({
  declarations: [
    SpSearchbarComponent,
    SpTrackCardComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    SpPlaylistModule
  ],
  exports: [
    // Modules
    SpPlaylistModule,
    // Components
    SpSearchbarComponent,
    SpTrackCardComponent
  ],
  providers: [
    SpotifyQueriesService
  ]
})
export class UIViewsModule { }
