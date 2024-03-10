import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wellness-center',
  templateUrl: './wellness-center.component.html',
  styleUrls: ['./wellness-center.component.scss']
})
export class WellnessCenterComponent {
  @Input() subMenu: string = 'siddeeqa_institute';
  @Input() language: string = '';


}
