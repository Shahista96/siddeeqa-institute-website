import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exemplars',
  templateUrl: './exemplars.component.html',
  styleUrls: ['./exemplars.component.scss']
})
export class ExemplarsComponent {
  @Input() language: string = '';


}
