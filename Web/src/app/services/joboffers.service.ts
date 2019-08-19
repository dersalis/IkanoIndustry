import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJobOffer, IOfferFromPhp } from '../models/jobOffer';

@Injectable({
  providedIn: 'root'
})
export class JoboffersService {

  constructor(private httpClient: HttpClient) { }

  private offersUrl: string = 'http://iiwapi.damianruta.pl/api/joboffers/getactive';
  private fileUrl: string = 'http://iiwapi.damianruta.pl/api/joboffers/GetOfferFile?offerId=';

  // Zwraca listę ofert pracy
  public getJobOffers(): Observable<IJobOffer[]> {
    return this.httpClient.get<IJobOffer[]>(`${this.offersUrl}`);
  }


  private phpOfersUrl: string = 'https://ikanoindustry.pl/offersapi/offers.php';
  public getOffersFromPhp(): Observable<IOfferFromPhp[]> {
    return this.httpClient.get<IOfferFromPhp[]>(`${this.phpOfersUrl}`);
  }
}
