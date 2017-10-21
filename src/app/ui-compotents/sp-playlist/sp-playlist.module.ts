import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { SpPlaylistComponent } from './sp-playlist.component';
import { SpPlaylistHeaderComponent } from './components/sp-playlist-header.component';
import { SpPlaylistSongsComponent } from './components/sp-playlist-songs.component';
import { SpPlaylistSongComponent } from './components/sp-playlist-song.component';

// Services

@NgModule({
  declarations: [
      SpPlaylistComponent,
      SpPlaylistHeaderComponent,
      SpPlaylistSongsComponent,
      SpPlaylistSongComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule
  ],
  exports: [
    SpPlaylistComponent,
    SpPlaylistHeaderComponent,
    SpPlaylistSongsComponent,
    SpPlaylistSongComponent
],
  providers: [
  ]
})
export class SpPlaylistModule { }
