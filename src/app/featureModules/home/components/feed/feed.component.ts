import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { Feeds } from '../../models/feeds-model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() feeds: Feeds[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  onLike(index: number) {
    if (!this.feeds[index].isLiked) {
      this.feeds[index].likes++;
      this.feeds[index].isLiked = true;
    } else {
      this.feeds[index].likes--;
      this.feeds[index].isLiked = false;
    }
    this.homeService.setFeeds(this.feeds);
  }
}
