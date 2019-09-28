import { Component, OnInit, ViewChild } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  // CookieLaw
  cookieLawSeen: boolean;
  // @ViewChild('cookieLaw')
  cookieLawEl: any;

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      // appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    this.cookieLawSeen = this.cookieLawEl.cookieLawSeen;
  }

  // CookieLaw - dismiss
  dismiss(): void {
    this.cookieLawEl.dismiss();
  }
}
