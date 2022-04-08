import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfmakeComponent } from './shared/pdfmake/pdfmake.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './pages/homepages/home.module';
import { NominaModule } from './pages/nomina/nomina.module';






@NgModule({
  declarations: [
    AppComponent,
    PdfmakeComponent,
    FooterComponent,
 
   
   
   
 
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NominaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
