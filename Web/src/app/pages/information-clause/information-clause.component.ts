import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-information-clause',
  templateUrl: './information-clause.component.html',
  styleUrls: ['./information-clause.component.scss']
})
export class InformationClauseComponent implements OnInit {

  public message: string = "";
  public contact: string = "";
  private ipAddress: string = "";

  // Zwróć IP użytkownika
  private getIP(): void {
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      //console.log('th data', data);
      this.ipAddress = data.ip;
    });
  }

  constructor(private fb: FacebookService, private http: HttpClient) {
    let initParams: InitParams = {
      // appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

    this.getIP();
  }

  ngOnInit() {}

  public sendMessage(): void {
    console.log(this.message + ' - ' + this.contact);

    // Wyczyść pola
    this.message = "";
    this.contact = "";
    console.log('IP: ' + this.ipAddress);
  }



}
