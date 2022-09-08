import { Component, Input, OnInit } from '@angular/core';
import { Stories } from '../../models/stories-model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  @Input() stories: Stories[] = [];

  ownerStory = {
    id: 1,
    name: 'You',
    avatar:
      'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}
