import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NavbarComponent } from 'src/components/nav-bar/nav-bar.component';
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
import { MobileDevelopmentComponent } from 'src/components/services/mobile-development/mobile-development.component';
import { MobileDevelopmentUpperSectionComponent } from 'src/components/services/mobile-development/mobile-development-upper-section/mobile-development-upper-section.component';
import { MobileDevelopmentBottomSectionComponent } from 'src/components/services/mobile-development/mobile-development-bottom-section/mobile-development-bottom-section.component';
import { RealStateServicesComponent } from 'src/components/services/real-state-services/real-state-services.component';
import { BottomSectionStateComponent } from 'src/components/services/real-state-services/bottom-section-state/bottom-section-state.component';
import { UpperSectionStateComponent } from 'src/components/services/real-state-services/upper-section-state/upper-section-state.component';
import { BackendPostsComponent } from 'src/components/blog/posts/backend-posts/backend-posts.component';
import { CloudsuitePostsComponent } from 'src/components/blog/posts/cloudsuite-posts/cloudsuite-posts.component'
import { DevopsPostsComponent } from 'src/components/blog/posts/devops-posts/devops-posts.component';
import { FrontendPostsComponent } from 'src/components/blog/posts/frontend-posts/frontend-posts.component';
import { PostsComponent } from 'src/components/blog/posts/posts.component';
import { BlogNavbarComponent } from 'src/components/blog/navbar/blogNavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    MobileDevelopmentComponent,
    MobileDevelopmentUpperSectionComponent,
    MobileDevelopmentBottomSectionComponent,
    RealStateServicesComponent,
    BottomSectionStateComponent,
    UpperSectionStateComponent,
    BackendPostsComponent,
    CloudsuitePostsComponent,
    DevopsPostsComponent,
    FrontendPostsComponent,
    PostsComponent,
    BlogNavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faGithub, faLinkedin)
  }
}
