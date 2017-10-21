import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';

// Models

@Injectable()
export class SpotifyQueriesService {
  headers: Headers;
  options: RequestOptions;

  spotifyBase = environment.spotifyBase;
  spotifyToken = environment.spotifyToken;
  spotifyUser = environment.userId;
  playlistId = environment.playlistId;

  private songsAndArtists: Subject<any> = new BehaviorSubject(null);
  songsAndArtists$ = this.songsAndArtists.asObservable();

  constructor(
    private _http: Http
  ) {
      // Create the header request for API
      this.headers = new Headers();
      this.headers.append('Authorization', `Bearer ${this.spotifyToken}`);

      // Add to options
      this.options = new RequestOptions();
      this.options.headers = this.headers;
  }

  getSpotifyAuthorization(): Observable<any> {
      return this._http.get(`http://localhost:3000/auth/spotify`, this.options)
                 .map(response => response.json());
  }
}
