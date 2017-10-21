import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { SpotifyQueriesService } from './../../services/spotify-queries.service';

@Component({
  selector: 'sp-track-card',
  styleUrls: ['./sp-track-card.component.scss'],
  template: `
    <div class="sp-track-card col-sm-3 col-xs-12">
      <img class="sp-track-card__image" 
           [src]="trackImage" 
           [alt]="trackAlt">
      <div class="sp-track-card__content">
        <span class="sp-track-card__name">{{ trackName }}</span>
        <span class="sp-track-card__disc">{{ trackDisc }}</span>
      </div>
    </div>
  `
})
export class SpTrackCardComponent implements OnInit {
  @Input()
  set track(track: any) {
      this.trackImage = track.album.images[1].url;
      this.trackAlt = this.trackName = track.name;
      this.trackDisc = track.album.name;
  }

  trackImage: string;
  trackName: string;
  trackAlt: string;
  trackDisc: string;

  constructor(
  ) { }

  ngOnInit() {
  }

  handleKeyPress(event) {
  }
}

