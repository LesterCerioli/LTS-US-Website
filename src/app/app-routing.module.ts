import { BackendComponent } from './../components/blog/posts/backend/backend.component';
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
import { PostsComponent } from 'src/components/blog/posts/posts.component';
import { FrontendComponent } from 'src/components/blog/posts/frontend/frontend.component';
import { DevopsComponent } from 'src/components/blog/posts/devops/devops.component';
import { CloudsuiteComponent } from 'src/components/blog/posts/cloudsuite/cloudsuite.component';

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
    path: 'blog/posts',
    component: PostsComponent,
  },
  {
    path: 'blog/posts/backend',
    component: BackendComponent
  },
  {
    path: 'blog/posts/frontend',
    component: FrontendComponent,
  },
  {
    path: 'blog/posts/devops',
    component: DevopsComponent,
  },
  {
    path: 'blog/posts/cloudsuite',
    component: CloudsuiteComponent,
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