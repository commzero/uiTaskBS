import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isDropDownOpened: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onOpenAccountList() {
    this.isDropDownOpened = !this.isDropDownOpened;
  }
}
