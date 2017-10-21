import { Component, OnInit } from '@angular/core';

// Components
import { SpSearchbarComponent } from './../../ui-compotents/sp-searchbar/sp-searchbar.component';
import { SpPlaylistComponent } from './../../ui-compotents/sp-playlist/sp-playlist.component';

// Services
import { SpotifyQueriesService } from './../../services/spotify-queries.service';

@Component({
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <sp-searchbar></sp-searchbar>
    <router-outlet></router-outlet>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <sp-playlist [playlist]="playlist"
                       [tracks]="tracks">
          </sp-playlist>
        </div>
        <div class="col-sm-6"></div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  playlist: any[];
  tracks: any[];

  constructor(
    private _spotify: SpotifyQueriesService
  ) { }

  ngOnInit() {
    this._spotify.getPlaylist().subscribe(data => {
      console.log(data);
      this.playlist = data;
    });
    this._spotify.getPlaylistTracks().subscribe(data => {
      console.log(data);
      this.tracks = data.items;
    });
  }
}

