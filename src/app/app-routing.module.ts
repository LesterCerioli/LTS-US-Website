
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './../components/nav-bar/nav-bar.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { PortifolioComponent } from 'src/components/portifolio/portifolio.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { AboultUsComponent } from 'src/components/aboult-us/aboult-us.component';
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
    path: 'aboult-us',
    component: AboultUsComponent
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
