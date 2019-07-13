import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-information-clause',
  templateUrl: './information-clause.component.html',
  styleUrls: ['./information-clause.component.scss']
})
export class InformationClauseComponent implements OnInit {

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
