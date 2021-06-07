import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss'],
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
export class RegulationsComponent implements OnInit {

  public siteKey: string = '';

  constructor(
    private fb: FacebookService,
    private http: HttpClient
    ) {
    let initParams: InitParams = {
      // appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

    // this.siteKey = '6LeC8q8UAAAAAAXkgfpR8N6e8lK4bIN6namQFofx';
    this.siteKey = '6Ld-qbMUAAAAAFWSnawGKVcvUSr40YkKgqQi6K9W';
  }

  ngOnInit() {
  }

}
