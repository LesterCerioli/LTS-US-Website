import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { PortifolioComponent } from 'src/components/portifolio/portifolio.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { BlogComponent } from 'src/components/blog/blog.component';
import { EducationalServicesComponent } from 'src/components/services/educational-services/educational-services.component';
import { PostsComponent } from 'src/components/blog/posts/posts.component';
import { BackendPostsComponent } from 'src/components/blog/posts/backend-posts/backend-posts.component';
import { CloudsuitePostsComponent } from 'src/components/blog/posts/cloudsuite-posts/cloudsuite-posts.component';
import { DevopsPostsComponent } from 'src/components/blog/posts/devops-posts/devops-posts.component';
import { FrontendPostsComponent } from 'src/components/blog/posts/frontend-posts/frontend-posts.component';

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
    path: 'portifolio',
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
    path: 'blog/posts/backend-posts',
    component: BackendPostsComponent,
  },

  {
    path: 'blog/posts/cloudsuite-posts',
    component: CloudsuitePostsComponent,
  },

  {
    path: 'blog/posts/devops-posts',
    component: DevopsPostsComponent,
  },

  {
    path: 'blog/posts/frontend-posts',
    component: FrontendPostsComponent,
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
