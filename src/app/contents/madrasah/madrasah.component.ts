import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-madrasah',
  templateUrl: './madrasah.component.html',
  styleUrls: ['./madrasah.component.scss']
})
export class MadrasahComponent {

  @Input() subMenu: string = '';

}
