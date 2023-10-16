import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { BlogComponent } from 'src/components/blog/blog.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { PortifolioComponent } from 'src/components/portifolio/portifolio.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { EducationalServicesComponent } from 'src/components/services/educational-services/educational-services.component';
import { BottomSectionComponent } from 'src/components/services/educational-services/bottom-section/bottom-section.component';
import { UpperSectionComponent } from 'src/components/services/educational-services/upper-section/upper-section.component';
import { TravelServicesComponent } from 'src/components/services/travel-services/travel-services.component';
import { UpperSectionTravelComponent } from 'src/components/services/travel-services/upper-section-travel/upper-section-travel.component';
import { BottomSectionTravelComponent } from 'src/components/services/travel-services/bottom-section-travel/bottom-section-travel.component';
import { FoodServicesComponent } from 'src/components/services/food-services/food-services.component';
import { TitleComponent } from 'src/components/services/food-services/title/title.component';
import { SecondSectionComponent } from 'src/components/services/food-services/second-section/second-section.component';
import { ThirdSectionComponent } from 'src/components/services/food-services/third-section/third-section.component';
import { RealStateServicesComponent } from 'src/components/services/real-state-services/real-state-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutUsComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    PortifolioComponent,
    ServicesComponent,
    EducationalServicesComponent,
    BottomSectionComponent,
    UpperSectionComponent,
    TravelServicesComponent,
    UpperSectionTravelComponent,
    BottomSectionTravelComponent,
    FoodServicesComponent,
    TitleComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    RealStateServicesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
