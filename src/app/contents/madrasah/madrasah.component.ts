import { Component, Input } from '@angular/core';
import { MatAccordion } from "@angular/material/expansion";


@Component({
  selector: 'app-madrasah',
  templateUrl: './madrasah.component.html',
  styleUrls: ['./madrasah.component.scss']
})
export class MadrasahComponent {

  @Input() subMenu: string = '';

  openPdf(pdf:string): void {
    // Navigate to PDF file URL in the browser
    if(pdf === 'Tarawih'){
      window.open('../../../assets/PDFs/TarawihPrayer.pdf', '_blank'); // Change 'your-pdf-file.pdf' to your actual PDF file name
    }else if(pdf === 'Zakat'){
      window.open('../../../assets/PDFs/Zakat.pdf', '_blank'); // Change 'your-pdf-file.pdf' to your actual PDF file name
    }
  }

}
