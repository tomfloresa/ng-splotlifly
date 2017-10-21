import { Component, OnInit } from '@angular/core';

// Services
import { SpotifyQueriesService } from './../../../services/spotify-queries.service';

@Component({
  template: `
    <div class="container-fluid">
      <sp-track-card *ngFor="let track of tracks" 
                     [track]="track">
      </sp-track-card>
    </div>
  `
})
export class SearchResultsComponent implements OnInit {
  tracks: any[];

  constructor(
    private _spotify: SpotifyQueriesService
  ) {}

  ngOnInit() {
    this._spotify.songsAndArtists$.subscribe(data => {
      if (data) {
        console.log(data);
        this.tracks = data.tracks.items;
      }
    });
  }
}

