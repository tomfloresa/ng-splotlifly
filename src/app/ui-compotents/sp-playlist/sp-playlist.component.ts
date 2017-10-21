import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sp-playlist',
  styleUrls: ['./sp-playlist.component.scss'],
  template: `
    <div class="sp-playlist">
      <sp-playlist-header [playlist]="playlist"></sp-playlist-header>
      <div class="clearfix"></div>
      <sp-playlist-songs [tracks]="tracks"></sp-playlist-songs>
    </div>
  `
})
export class SpPlaylistComponent implements OnInit {
  @Input() playlist;
  @Input() tracks;

  constructor() { }

  ngOnInit() {
  }
}

