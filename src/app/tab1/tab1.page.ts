import {Component, OnInit} from '@angular/core';
import {IProduct, ProductService} from '../Services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  products: IProduct[];

  constructor(private data: ProductService) {}

  ngOnInit() {
    this.data.getProducts().subscribe(p => this.products = p);
  }
}
