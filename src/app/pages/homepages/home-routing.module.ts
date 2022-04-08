import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgComponent } from 'src/app/components/HomeComponents/img/img.component';
import { InfoComponent } from 'src/app/components/HomeComponents/info/info.component';
import { NominaComponent } from '../nomina/nomina.component';

import { HomepagesComponent } from './homepages.component';

const routes: Routes = [


  
 {
   path: '', component:HomepagesComponent,
   children:[
     
     {path: 'info', component:InfoComponent},
     {path:'img', component:ImgComponent},
   
    
   ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
