import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {


  @Input() images: carouselImage[] = [
    {imageSrc: '/assets/imagesBlog/backendCard.png', imageAlt: 'img1'},
    {imageSrc: '/assets/imagesBlog/cloudSuiteCard.png', imageAlt: 'img2'},
    {imageSrc: '/assets/imagesBlog/devOpsCard.png', imageAlt: 'img3'},
    {imageSrc: '/assets/imagesBlog/frontEndCard.png', imageAlt: 'img4'},]


  ngOnInit(): void{

  }


}
