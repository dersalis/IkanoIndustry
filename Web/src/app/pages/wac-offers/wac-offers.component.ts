import { IOfferFromPhp } from './../../models/jobOffer';
import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { IJobOffer } from '../../models/jobOffer';
import { JoboffersService } from 'src/app/services/joboffers.service';

@Component({
  selector: 'app-wac-offers',
  templateUrl: './wac-offers.component.html',
  styleUrls: ['./wac-offers.component.scss']
})
export class WacOffersComponent implements OnInit {

  public jobOffers: IJobOffer[] = [];
  public jobOffersFromPhp: IOfferFromPhp[] = [];

  constructor(private fb: FacebookService, private joboffersService: JoboffersService) {
    let initParams: InitParams = {
      // appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    this.joboffersService.getJobOffers().subscribe(response => {
      this.jobOffers = response;
    });

    this.joboffersService.getOffersFromPhp().subscribe(result => {
      console.log('Z PHP:');
      console.log(result);
      this.jobOffersFromPhp = result;
    });
  }

}
