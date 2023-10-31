
import { Component, Input, OnInit, OnDestroy } from '@angular/core';


interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit, OnDestroy {

  @Input() images: carouselImage[] = [
    {imageSrc: '/assets/imagesBlog/backendCard.png', imageAlt: 'img1'},
    {imageSrc: '/assets/imagesBlog/cloudSuiteCard.png', imageAlt: 'img2'},
    {imageSrc: '/assets/imagesBlog/devOpsCard.png', imageAlt: 'img3'},
    {imageSrc: '/assets/imagesBlog/frontEndCard.png', imageAlt: 'img4'},]

  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 5000; //default to 3 seconds

  selectedIndex = 0;
  private intervalId: any;

  ngOnInit(): void{
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }


  autoSlideImages(): void {
    if (this.autoSlide) {
      this.intervalId = setInterval(() => {
        this.onNextClick();
      }, this.slideInterval);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


   //sets index of image on dot/indicator click
   selectImage(index: number): void {
    this.selectedIndex = index;
  }


  onPrevClick(): void{
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex--;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

}
