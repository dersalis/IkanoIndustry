import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
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
export class IndexComponent implements OnInit, AfterContentInit {


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
    console.log('ngOnInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

}
