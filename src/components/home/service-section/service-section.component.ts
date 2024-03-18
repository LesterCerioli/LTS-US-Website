import { Component, Output } from '@angular/core';
import { SliderComponent } from 'src/app/components/shared/slider/slider.component';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent {
  @Output() images = [
    {path: "../../../assets/images/homePage/one.svg"},
    {path: "../../../assets/images/homePage/two.svg"},
    {path: "../../../assets/images/homePage/tre.svg"},
    {path: "../../../assets/images/homePage/four.svg"},
    {path: "../../../assets/images/homePage/five.svg"},
    {path: "../../../assets/images/homePage/six.svg"}
  ]
}
