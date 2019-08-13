import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-wac-offers',
  templateUrl: './wac-offers.component.html',
  styleUrls: ['./wac-offers.component.scss']
})
export class WacOffersComponent implements OnInit {

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
