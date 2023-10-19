import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isMenuVisible: boolean = window.innerWidth < 769;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMenuVisible = event.target.innerWidth < 769;
    if (!this.isMenuVisible) {
      this.isMenuOpen = false;
    }
  }
}