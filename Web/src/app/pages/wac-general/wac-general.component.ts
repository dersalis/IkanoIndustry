import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-wac-general',
  templateUrl: './wac-general.component.html',
  styleUrls: ['./wac-general.component.scss'],
  animations: [
    trigger('showQuotationSection', [
      state('initial', style({
        opacity: '0'
      })),
      state('final', style({
        opacity: '1'
      })),
      transition('*=>final', animate('0.5s ease-in')),
    ]),
    trigger('showQuotation', [
      state('initial', style({
        opacity: '0'
      })),
      state('final', style({
        opacity: '1'
      })),
      transition('*=>final', animate('2s 1s ease-in')),
    ]),
    trigger('showSection', [
      state('initial', style({
        opacity: '0'
      })),
      state('final', style({
        opacity: '1'
      })),
      transition('*=>final', animate('2.5s ease-in')),
    ]),
  ]
})
export class WacGeneralComponent implements OnInit {

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
