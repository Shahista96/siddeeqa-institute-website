import { Component, Input } from '@angular/core';
import { MatAccordion } from "@angular/material/expansion";


@Component({
  selector: 'app-madrasah',
  templateUrl: './madrasah.component.html',
  styleUrls: ['./madrasah.component.scss']
})
export class MadrasahComponent {

  @Input() subMenu: string = '';
  @Input() language: string = '';
  responsiveOptions: any[] = [
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

  short_images: String [] = ["../../../assets/Images/madrasah/carrousel_1.webp","../../../assets/Images/madrasah/carrousel_2.webp","../../../assets/Images/madrasah/carrousel_3.webp"]
  short_links: String [] = ["../../../assets/PDFs/madrasah/carrousel_1.pdf","../../../assets/PDFs/madrasah/carrousel_2.pdf","../../../assets/PDFs/madrasah/carrousel_3.pdf"];
  post_images: String [] = ["../../../assets/Images/madrasah/carrousel_1.webp","../../../assets/Images/madrasah/carrousel_2.webp","../../../assets/Images/madrasah/carrousel_3.webp"]
  openPdf(pdf:string): void {
    // Navigate to PDF file URL in the browser
    if(pdf === 'Tarawih'){
      window.open('../../../assets/PDFs/TarawihPrayer.pdf', '_blank'); // Change 'your-pdf-file.pdf' to your actual PDF file name
    }else if(pdf === 'Zakat'){
      window.open('../../../assets/PDFs/Zakat.pdf', '_blank'); // Change 'your-pdf-file.pdf' to your actual PDF file name
    }
  }

}
