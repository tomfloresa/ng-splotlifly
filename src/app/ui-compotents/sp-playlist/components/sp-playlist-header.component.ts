import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sp-playlist-header',
  styleUrls: ['../sp-playlist.component.scss'],
  template: `
    <div class="sp-playlist-header">
      <img class="sp-playlist-header__image" 
           [src]="playlistImage" 
           [alt]="playlistImageAlt">
      <div class="sp-playlist-header__content">
        <span class="sp-playlist-header__name">{{ playlistName }}</span>
        <span class="sp-playlist-header__songs">{{ playlistTracks }}</span>
      </div>
    </div>
  `
})
export class SpPlaylistHeaderComponent implements OnInit {
  @Input()
  set playlist(playlist: any) {
    this.playlistImage = playlist.images[0].url;
    this.playlistName = this.playlistImageAlt = playlist.name;
    this.playlistTracks = playlist.tracks.items.length;
  }

  playlistName: string;
  playlistImageAlt: string;
  playlistImage: string;
  playlistTracks: string;

  constructor() { }

  ngOnInit() {
  }
}

