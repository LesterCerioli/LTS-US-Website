import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  //Right now I`m using a default list of images so this component can be of share use through the application. If need be, just pass via input a list of images from a parent component. As such, the child component will receive it`s new params and will render it`s contents accordingly.

  @Input() images = [
    {path: "https://picsum.photos/200/300"},
    {path: "https://picsum.photos/200/300"},
    {path: "https://picsum.photos/200/300"},
    {path: "https://picsum.photos/200/300"},
    {path: "https://picsum.photos/200/300"},
    {path: "https://picsum.photos/200/300"}
  ]
}
