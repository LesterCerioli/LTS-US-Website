
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { PortifolioComponent } from 'src/components/portifolio/portifolio.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { AboutUsComponent } from 'src/components/aboult-us/about-us.component';
import { BlogComponent } from 'src/components/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'portifolio',
    component: PortifolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
