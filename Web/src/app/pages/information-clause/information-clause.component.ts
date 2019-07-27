import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-information-clause',
  templateUrl: './information-clause.component.html',
  styleUrls: ['./information-clause.component.scss']
})
export class InformationClauseComponent implements OnInit {
  messageForm: FormGroup;
  send = false;

  public message: string = "";
  public contact: string = "";
  private ipAddress: string = "";

  // Zwróć IP użytkownika
  private getIP(): void {
    this.http.get<{ ip: string }>('https://jsonip.com')
      .subscribe(data => {
        //console.log('th data', data);
        this.ipAddress = data.ip;
      });
  }

  constructor(private fb: FacebookService, private http: HttpClient, private formBuilder: FormBuilder) {
    let initParams: InitParams = {
      // appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

    this.getIP();
  }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required],
      contact: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.messageForm.controls; }

  public sendMessage(): void {
    this.send = true;
    // stop here if form is invalid
    if (this.messageForm.invalid) {
      console.log('Formularz nie wypełniony!');
      return;
    }

    console.log(this.ipAddress + ' | ' + this.f.contact.value + ' | ' + this.f.message.value);

    this.messageForm.reset();
    this.send = false;
  }



}
