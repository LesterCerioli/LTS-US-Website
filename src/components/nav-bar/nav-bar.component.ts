import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { IdleUserService } from 'src/services/idle-user-service/idle-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isMenuVisible: boolean = window.innerWidth < 769;


  constructor(private data: IdleUserService){ }

  ngOnInit(){
    this.data.currentMessage.subscribe(isMenuOpen => this.isMenuOpen = isMenuOpen);
  }

  toggleMenu() {
    this.data.toggleMenu(!this.isMenuOpen);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMenuVisible = event.target.innerWidth < 769;
    if (!this.isMenuVisible) {
      this.isMenuOpen = false;
    }
  }
}
