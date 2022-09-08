import { Injectable } from '@angular/core';
import { Feeds } from './models/feeds-model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  setFeeds(feeds: Feeds[]) {
    localStorage.setItem('feeds', JSON.stringify(feeds));
  }

  getFeeds(): string | null {
    return localStorage.getItem('feeds');
  }
}
