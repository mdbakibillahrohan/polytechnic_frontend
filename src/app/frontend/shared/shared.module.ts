import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { NewsComponent } from './news/news.component';
import { HomePageTileComponent } from './home-page-tile/home-page-tile.component';



@NgModule({
  declarations: [
    NoticeBoardComponent,
    NewsComponent,
    HomePageTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoticeBoardComponent,
    NewsComponent,
    HomePageTileComponent,
  ]
})
export class SharedModule { }
