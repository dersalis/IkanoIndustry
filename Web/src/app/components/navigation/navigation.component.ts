import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('showMenu', [
      state('initial', style({
        opacity: '0',
        marginBottom: '-75px'
      })),
      state('final', style({
        opacity: '1',
        marginBottom: '0px'
      })),
      transition('*=>final', animate('1s ease-in')),
    ]),
    trigger('showLogo', [
      state('initial', style({
        opacity: '0',
        marginLeft: '-130px'
      })),
      state('final', style({
        opacity: '1',
        marginLeft: '0px'
      })),
      transition('*=>final', animate('0.3s ease-in')),
    ]),
  ]
})
export class NavigationComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }


}
