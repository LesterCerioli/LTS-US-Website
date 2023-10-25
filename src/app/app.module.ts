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
import { PortfolioFirstSectionComponent } from 'src/components/portifolio/portfolio-first-section/portfolio-first-section.component';
import { OurClientsComponent } from '../components/portifolio/our-clients/our-clients.component'
import { ClientsListComponent } from 'src/components/portifolio/clients-list/clients-list.component';
import { OurGithubComponent } from 'src/components/portifolio/our-github/our-github.component';
import { CrmErpServicesComponent } from '../components/services/crm-erp-services/crm-erp-services.component';
import { CrmErpUpperSectionComponent } from '../components/services/crm-erp-services/crm-erp-upper-section/crm-erp-upper-section.component';
import { CrmErpBottomSectionComponent } from '../components/services/crm-erp-services/crm-erp-bottom-section/crm-erp-bottom-section.component';
import { ServiceSectionComponent } from 'src/components/home/service-section/service-section.component';
import { AboutUsSectionComponent } from 'src/components/home/about-us-section/about-us-section.component';
import { BannerHomeComponent } from 'src/components/home/banner-home/banner-home.component';
import { BlogSectionComponent } from 'src/components/home/blog-section/blog-section.component';
import { ContactSectionComponent } from 'src/components/home/contact-section/contact-section.component';
import { PortifolioSectionComponent } from 'src/components/home/portifolio-section/portifolio-section.component';
import { BackendComponent } from 'src/components/blog/posts-component/backend/backend.component';
import { CloudsuiteComponent } from 'src/components/blog/posts-component/cloudsuite/cloudsuite.component';
import { DevopsComponent } from 'src/components/blog/posts-component/devops/devops.component';
import { FrontendComponent } from 'src/components/blog/posts-component/frontend/frontend.component';
import { NavbarBlogComponent } from '../components/blog/posts-component/navbar-blog/navbar-blog.component';
import { PostsComponentComponent } from 'src/components/blog/posts-component/posts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    HomeComponent,
    AboutUsSectionComponent,
    BannerHomeComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    PortifolioSectionComponent,
    ServiceSectionComponent,
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
    PortfolioFirstSectionComponent,
    OurClientsComponent,
    ClientsListComponent,
    OurGithubComponent,
    CrmErpServicesComponent,
    CrmErpUpperSectionComponent,
    CrmErpBottomSectionComponent,
    BackendComponent,
    CloudsuiteComponent,
    DevopsComponent,
    FrontendComponent,
    NavbarBlogComponent,
    PostsComponentComponent
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
