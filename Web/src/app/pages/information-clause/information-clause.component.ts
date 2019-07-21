import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-information-clause',
  templateUrl: './information-clause.component.html',
  styleUrls: ['./information-clause.component.scss']
})
export class InformationClauseComponent implements OnInit {

  public message: string = "";
  public contact: string = "";

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

  public sendMessage(): void {
    console.log(this.message + ' - ' + this.contact);

    // Wyczyść pola
    this.message = "";
    this.contact = "";
  }

}
