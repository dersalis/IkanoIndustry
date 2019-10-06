import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
  animations: [
    trigger('showTopNav', [
      state('initial', style({
        opacity: '0',
        marginTop: '-35px'
      })),
      state('final', style({
        opacity: '1',
        marginTop: '10px'
      })),
      transition('*=>final', animate('1s ease-in')),
    ]),
  ]
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
