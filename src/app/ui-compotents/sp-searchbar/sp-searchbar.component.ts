import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { SpotifyQueriesService } from './../../services/spotify-queries.service';

@Component({
  selector: 'sp-searchbar',
  styleUrls: ['./sp-searchbar.component.scss'],
  template: `
    <div class="sp-searchbar">
      <input type="text" 
             [placeholder]="'buscar'"
             (keyup)="handleKeyPress($event)">
      <img class="sp-searchbar__icon" src="../../../assets/icons/magnifier.svg" alt="Buscar">
    </div>
  `
})
export class SpSearchbarComponent implements OnInit {
  constructor(
    private _spotify: SpotifyQueriesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  handleKeyPress(event) {
    const value = event.target.value;

    if (value.length > 1) {
      this._spotify.getTrackOrArtist(value);
      this._router.navigate(['busqueda'], { relativeTo: this._activatedRoute });
    } else if (value.length === 0) {
      this._router.navigate(['']);
    }
  }
}

