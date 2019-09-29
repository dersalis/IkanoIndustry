import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-wac-command',
  templateUrl: './wac-command.component.html',
  styleUrls: ['./wac-command.component.scss'],
  animations: [
    trigger('showQuotation', [
      state('initial', style({
        opacity: '0'
      })),
      state('final', style({
        opacity: '1'
      })),
      transition('*=>final', animate('2s')),
    ]),
  ]
})
export class WacCommandComponent implements OnInit {

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      // appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  ngOnInit() {
  }

}
