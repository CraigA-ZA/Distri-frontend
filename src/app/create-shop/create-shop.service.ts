import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateShopService {

  constructor(private http: HttpClient) { }

  public createShop(payload: any) {
    return this.http.post(`${environment.baseUrl}/create-shop`,payload);
  }
}
