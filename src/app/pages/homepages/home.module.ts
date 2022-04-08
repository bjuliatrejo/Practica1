import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepagesComponent } from './homepages.component';
import { NavbarhomeComponent } from 'src/app/components/HomeComponents/navbarhome/navbarhome.component';
import { InfoComponent } from 'src/app/components/HomeComponents/info/info.component';
import { ImgComponent } from 'src/app/components/HomeComponents/img/img.component';


@NgModule({
  declarations: [
    HomepagesComponent,
    NavbarhomeComponent,
    InfoComponent,
    ImgComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
