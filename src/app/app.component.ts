import { Component, HostListener } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IdleUserService } from 'src/services/idle-user-service/idle-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lucas Technology Services';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  isMenuOpen: boolean = false;
  isMenuVisible: boolean = window.innerWidth < 769;

  constructor(private data: IdleUserService){ }

  ngOnInit(){
    this.data.currentMessage.subscribe(isMenuOpen => this.isMenuOpen = isMenuOpen);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMenuVisible = event.target.innerWidth < 769;
    if (!this.isMenuVisible) {
      this.isMenuOpen = false;
    }
  }

}
