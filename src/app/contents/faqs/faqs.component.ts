import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  @Input() language: string = '';
  @Input() subMenu: string = 'siddeeqa_institute';

}
