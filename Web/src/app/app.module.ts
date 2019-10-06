import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { CareerComponent } from './pages/career/career.component';
import { InformationClauseComponent } from './pages/information-clause/information-clause.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { FacebookModule } from 'ngx-facebook';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WacGeneralComponent } from './pages/wac-general/wac-general.component';
import { WacOffersComponent } from './pages/wac-offers/wac-offers.component';
import { WacCommandComponent } from './pages/wac-command/wac-command.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieLawModule } from 'angular2-cookie-law';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CareerComponent,
    InformationClauseComponent,
    NavigationComponent,
    TopPanelComponent,
    FooterComponent,
    PageNotFoundComponent,
    WacGeneralComponent,
    WacOffersComponent,
    WacCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
    FacebookModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    CookieLawModule,
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
