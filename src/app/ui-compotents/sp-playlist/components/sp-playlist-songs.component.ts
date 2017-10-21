import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sp-playlist-songs',
  styleUrls: ['../sp-playlist.component.scss'],
  template: `
    <ul>
      <li *ngFor="let track of tracks">
        <sp-playlist-song [track]="track"></sp-playlist-song>
      </li>
    </ul>
  `
})
export class SpPlaylistSongsComponent implements OnInit {
  @Input() tracks;

  constructor() { }

  ngOnInit() {
  }
}

