import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SubmenuSingleBlockComponent } from './header/submenu-single-block/submenu-single-block.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
       LayoutComponent,
       HeaderComponent,
       SubmenuSingleBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
