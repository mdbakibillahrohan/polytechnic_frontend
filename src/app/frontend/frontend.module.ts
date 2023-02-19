import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SubmenuSingleBlockComponent } from './layout/header/submenu-single-block/submenu-single-block.component';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SubmenuSingleBlockComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
