import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FeedComponent } from './components/feed/feed.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { LatestActivityComponent } from './components/latest-activity/latest-activity.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    FeedComponent,
    StoriesComponent,
    SuggestionsComponent,
    LatestActivityComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
