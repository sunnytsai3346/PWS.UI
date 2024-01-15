import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})

export class AddproductComponent {
  newProduct : Product = {
    id: '',
    name: '',
    type: '',
    color: '',
    price: 0
  }
  constructor(private productService :ProductsService, private router:Router){

  }
 addProduct(){
  this.productService.addProduct(this.newProduct)
  .subscribe({
    next:(product) => { this.router.navigate(['product'])},
    error :(response) =>{
      console.log(response);

    }
  })
 }

}
