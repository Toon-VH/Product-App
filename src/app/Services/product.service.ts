/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {
  }

  productURL = 'http://localhost:3000/products';

  getProducts() {
    return this.http.get<IProduct[]>(this.productURL);
  }
}

export interface IProduct{
  id: Number,
  price: String,
  name: String,
  brand: String,
  description: String,
  link: String
}
