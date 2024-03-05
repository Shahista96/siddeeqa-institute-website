import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { FaqsComponent } from './contents/faqs/faqs.component';
import { HomeComponent } from './contents/home/home.component';
import { ExemplarsComponent } from './contents/exemplars/exemplars.component';
import { MadrasahComponent } from './contents/madrasah/madrasah.component';
import { WellnessCenterComponent } from './contents/wellness-center/wellness-center.component';
import { ContactUsComponent } from './contents/contact-us/contact-us.component';
import { CarouselModule } from 'primeng/carousel';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FaqsComponent,
    HomeComponent,
    ExemplarsComponent,
    MadrasahComponent,
    WellnessCenterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
MatMenuModule,
MatIconModule,
FlexLayoutModule,
MatSidenavModule,
MatListModule,
CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
