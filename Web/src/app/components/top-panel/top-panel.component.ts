import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {

  private storedLang: string = "";

  constructor(private translate: TranslateService) {
    this.storedLang = this.getLanguage();
    if(this.storedLang !== "") {
      translate.setDefaultLang(this.storedLang);
    }
    else {
      translate.setDefaultLang('pl');
    }
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.setLanguage(language);
  }

  private getLanguage(): string {
    if (localStorage) {
      return localStorage['language'] || "";
    }
    else {
      return "";
    }
  }

  private setLanguage(language: string) {
    if (localStorage) {
      localStorage['language'] = language;
    }
  }
}
