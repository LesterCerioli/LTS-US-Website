import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EducationalServicesComponent } from './services/educational-services/educational-services.component';
import { UpperSectionComponent } from './services/educational-services/upper-section/upper-section.component';
import { BottomSectionComponent } from './services/educational-services/bottom-section/bottom-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    EducationalServicesComponent,
    UpperSectionComponent,
    BottomSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
