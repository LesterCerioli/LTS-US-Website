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
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { HomerBannerComponent } from './homer-banner/homer-banner.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { PortifolioSectionComponent } from './portifolio-section/portifolio-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';

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
    AboutUsSectionComponent,
    HomerBannerComponent,
    BlogSectionComponent,
    ServiceSectionComponent,
    PortifolioSectionComponent,
    ContactSectionComponent,
    BannerHomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
