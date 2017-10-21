import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sp-playlist-song',
  styleUrls: ['../sp-playlist.component.scss'],
  template: `
    <div class="sp-playlist-song">
      <span class="sp-playlist-song__name">{{ trackName }}</span>
      <span class="sp-playlist-song__artist"></span>
      <span class="sp-playlist-song__album">{{ trackAlbum }}</span>
    </div>
  `
})
export class SpPlaylistSongComponent implements OnInit {
  @Input()
  set track(track: any) {
    const { name, album } = track.track;
    this.trackName = name;
    this.trackAlbum = album.name;
  }

  trackName: string;
  trackAlbum: string;

  constructor() { }

  ngOnInit() {
  }
}

