import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl:any = '';
  public profileUpdate = new BehaviorSubject(true);
  public taxUpdate = new BehaviorSubject(true);
  public deviceToken:any;
  public id:any;
  public ticketId:any;
  public taxId:any;
  public isFrom:any;
  public guestId:any;
  public eventId:any;
  public evnetDeleId:any;
  public selectedTicketId:any;
  public couponEditId:any;
  constructor(private http:HttpClient) { }

  getData(url) {
    return this.http.get(this.baseUrl + url);
  }
  postData(url, data) {
    return this.http.post(this.baseUrl + url, data);
  }

  getDataWithToken(url) {
    let header = new HttpHeaders();
    header = header.set("Authorization", "Bearer " + localStorage.getItem('token'));
    header = header.set("Accept", "application/json");
    return this.http.get(this.baseUrl + url, { headers: header });
  }


  postDataWithToken(url, data) {
    let header = new HttpHeaders();
    header = header.set("Authorization", "Bearer " + localStorage.getItem('token'));
    header = header.set("Accept", "application/json");
    return this.http.post(this.baseUrl + url, data, { headers: header });
  }
}
