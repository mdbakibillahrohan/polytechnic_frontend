import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SubmenuSingleBlockComponent } from './layout/header/submenu-single-block/submenu-single-block.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SubmenuSingleBlockComponent,
    SidebarComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    SharedModule
  ]
})
export class FrontendModule { }
