import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  responsiveOptions: any[] | undefined;

  images: String [] = ["../../../assets/Images/Carousel/1681766172552.webp","../../../assets/Images/Carousel/Islamic finance Teaser 2023.webp","../../../assets/Images/Carousel/photo_2024-03-01_12-12-49.webp"]

  ngOnInit() {

    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    
}



}
