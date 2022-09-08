import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Feeds } from './models/feeds-model';
import { Stories } from './models/stories-model';
import { Suggestions } from './models/suggestions-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stories: Stories[] = [
    {
      id: 1,
      name: 'lorem',
      avatar:
        'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      isViewed: false,
    },
    {
      id: 2,
      name: 'lorem',
      avatar:
        'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      isViewed: false,
    },
    {
      id: 3,
      name: 'lorem',
      avatar:
        'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      isViewed: false,
    },
    {
      id: 4,
      name: 'ipsum',
      avatar: 'http://placekitten.com/250/250',
      isViewed: true,
    },
    {
      id: 5,
      name: 'ipsum',
      avatar: 'http://placekitten.com/250/250',
      isViewed: true,
    },
    {
      id: 6,
      name: 'ipsum',
      avatar: 'http://placekitten.com/250/250',
      isViewed: true,
    },
    {
      id: 7,
      name: 'ipsum',
      avatar: 'http://placekitten.com/250/250',
      isViewed: true,
    },
  ];

  feeds: Feeds[] = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      photo:
        'https://c4.wallpaperflare.com/wallpaper/550/771/709/abstract-colour-background-orange-wallpaper-preview.jpg',
      avatar: 'http://placekitten.com/250/250',
      likes: 25,
      comments: 20,
      isLiked: false,
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      photo:
        'https://media.istockphoto.com/photos/dark-orange-blue-green-teal-abstract-background-gradient-toned-rough-picture-id1410420106',
      avatar: 'http://placekitten.com/250/250',
      likes: 25,
      comments: 20,
      isLiked: false,
    },
    {
      id: 3,
      name: 'Lorem Ipsum',
      photo:
        'https://static.vecteezy.com/system/resources/thumbnails/002/317/115/small/watercolor-pastel-background-hand-painted-aquarelle-colorful-stains-on-paper-free-vector.jpg',
      avatar: 'http://placekitten.com/250/250',
      likes: 25,
      comments: 20,
      isLiked: false,
    },
    {
      id: 4,
      name: 'Lorem Ipsum',
      photo:
        'https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg',
      avatar: 'http://placekitten.com/250/250',
      likes: 25,
      comments: 20,
      isLiked: false,
    },
  ];

  suggestions: Suggestions[] = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      isFollowed: false,
      username: '@loremIpsum',
      avatar: 'http://placekitten.com/250/250',
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      isFollowed: true,
      username: '@loremIpsum',
      avatar: 'http://placekitten.com/250/250',
    },
    {
      id: 3,
      name: 'Lorem Ipsum',
      isFollowed: false,
      username: '@loremIpsum',
      avatar: 'http://placekitten.com/250/250',
    },
  ];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getFeedsData();
  }

  getFeedsData() {
    if (localStorage.getItem('feeds')) {
      this.feeds = JSON.parse(this.homeService.getFeeds() || '{}');
    }
  }
}
