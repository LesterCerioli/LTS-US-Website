import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isMenuVisible: boolean = window.innerWidth < 768;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMenuVisible = event.target.innerWidth < 768;
    if (!this.isMenuVisible) {
      this.isMenuOpen = false; // Fechar o menu em telas maiores que 768px
    }
  }
}
