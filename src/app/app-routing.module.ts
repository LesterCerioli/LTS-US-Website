import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { PortifolioComponent } from 'src/components/portifolio/portifolio.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { BlogComponent } from 'src/components/blog/blog.component';
import { EducationalServicesComponent } from 'src/components/services/educational-services/educational-services.component';
import { TravelServicesComponent } from 'src/components/services/travel-services/travel-services.component';
import { FoodServicesComponent } from 'src/components/services/food-services/food-services.component';
import { RealStateServicesComponent } from 'src/components/services/real-state-services/real-state-services.component';
import { MobileDevelopmentComponent } from 'src/components/services/mobile-development/mobile-development.component';
import { CrmErpServicesComponent } from 'src/components/services/crm-erp-services/crm-erp-services.component';
import { AboutUsSectionComponent } from 'src/components/home/about-us-section/about-us-section.component';
import { BannerHomeComponent } from 'src/components/home/banner-home/banner-home.component';
import { BlogSectionComponent } from 'src/components/home/blog-section/blog-section.component';
import { ContactSectionComponent } from 'src/components/home/contact-section/contact-section.component';
import { PortfolioFirstSectionComponent } from 'src/components/portifolio/portfolio-first-section/portfolio-first-section.component';
import { ServiceSectionComponent } from 'src/components/home/service-section/service-section.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home/about-us-section',
    component: AboutUsSectionComponent,
  },
  {
    path: 'home/banner-home',
    component: BannerHomeComponent,
  },
  {
    path: 'home/blog-section',
    component: BlogSectionComponent,
  },
  {
    path: 'home/contact-section',
    component: ContactSectionComponent,
  },
  {
    path: 'home/portifolio-section',
    component: PortfolioFirstSectionComponent,
  },
  {
    path: 'home/service-section',
    component: ServiceSectionComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'services/educational-services',
    component: EducationalServicesComponent,
  },
  {
    path: 'services/travel-services',
    component: TravelServicesComponent,
  },
  {
    path: 'services/food-services',
    component: FoodServicesComponent,
  },
  {
    path: 'services/real-estate-services',
    component: RealStateServicesComponent,
  },
  {
    path: 'services/mobile-development',
    component: MobileDevelopmentComponent,
  },
  {
    path: 'portfolio',
    component: PortifolioComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'services/erp-crm-services',
    component: CrmErpServicesComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
