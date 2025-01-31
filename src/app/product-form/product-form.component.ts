import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  product: Product = { name: '', price: 0 };

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(form: NgForm) {
    this.productService.createProduct(this.product).subscribe(() => {
      form.reset();
      alert('Product added!');
    });
  }

}
