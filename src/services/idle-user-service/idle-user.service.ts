// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class IdleUserService {
//   private timeoutId: any;
//   private countdownId: any;
//   private countdownValue: any = 3000 / 1000;

//   private isMenuOpen = new BehaviorSubject<boolean>(false);
//   currentMessage = this.isMenuOpen.asObservable();

//   constructor() { }

//   initListener() {
//     window.addEventListener('click', () => this.reset());
//   }

//   reset() {
//     clearTimeout(this.timeoutId);
//     clearTimeout(this.countdownId);
//     this.startCountdown();
//   }

//   softReset(){
//     clearTimeout(this.timeoutId);
//     clearTimeout(this.countdownId);
//   }

//   startCountdown() {
//     this.countdownValue = 3000 / 1000;
//     this.countdownId = setInterval(() => {
//       this.countdownValue--;
//       //logs to check inactivity countdown
//       //console.log('Menu will close due to inactivity in:', this.countdownValue, 'segundos');
//       if (this.countdownValue <= 0) {
//         clearInterval(this.countdownId);
//         //log to check inactivity
//         //console.log('menu inactive');
//         this.countdownValue = 3000 / 1000;
//         this.isMenuOpen.next(!this.isMenuOpen);
//       }
//     }, 1000);
//   }

//   toggleMenu(input: boolean){
//     this.isMenuOpen.next(input);
//     if(this.isMenuOpen && window.innerWidth < 769){
//       if(this.countdownValue < 3){
//         this.softReset();
//         this.countdownValue = 3000 / 1000;
//       }else if(this.countdownValue === 3){
//         this.reset();
//       }
//     }
//   }
// }
