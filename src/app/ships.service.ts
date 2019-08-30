import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json'
});
const options = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  shipsDetails = [
    {name: 'MS Fram'},
    {name: 'MS Nordkapp'},
    {name: 'MS Polarlys'},
    {name: 'MS NordNorge'},
    {name: 'MS TrollFjord'}
  ];

  constructor(private httpClient: HttpClient) { }

  searchShips(data){
    const originatorListUrl = 'api/ships/' + data;
    return this.httpClient.get(originatorListUrl, options);
  }
  searchDummyShips(data){
    return this.shipsDetails;
  }
}
