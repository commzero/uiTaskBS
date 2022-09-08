import { Component, Input, OnInit } from '@angular/core';
import { Suggestions } from '../../models/suggestions-model';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {
  @Input() suggestions: Suggestions[] = [];

  constructor() {}

  ngOnInit(): void {}
}
