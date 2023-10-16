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

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PostsComponent } from '../components/blog/posts/posts.component';
import { BackendPostsComponent } from 'src/components/blog/posts/backend-posts/backend-posts.component';
import { FrontendPostsComponent } from 'src/components/blog/posts/frontend-posts/frontend-posts.component';
import { DevopsPostsComponent } from 'src/components/blog/posts/devops-posts/devops-posts.component';
import { CloudsuitePostsComponent } from 'src/components/blog/posts/cloudsuite-posts/cloudsuite-posts.component';

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
    PostsComponent,
    BackendPostsComponent,
    FrontendPostsComponent,
    DevopsPostsComponent,
    CloudsuitePostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
