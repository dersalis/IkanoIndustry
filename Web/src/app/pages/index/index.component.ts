import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
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
export class IndexComponent implements OnInit, AfterContentInit {


  // CookieLaw
  cookieLawSeen: boolean;
  // @ViewChild('cookieLaw')
  cookieLawEl: any;

  constructor(private fb: FacebookService) {
    console.log('Konstrukor');
    let initParams: InitParams = {
      // appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    this.cookieLawSeen = this.cookieLawEl.cookieLawSeen;
    console.log('ngOnInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // CookieLaw - dismiss
  dismiss(): void {
    this.cookieLawEl.dismiss();
  }
}
