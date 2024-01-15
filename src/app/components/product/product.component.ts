import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[] =[];

  constructor(private productService :ProductsService, private router:Router){

  }


  ngOnInit(): void {
      this.productService.GetAllProducts()
      .subscribe({
        next: (products) => {
          this.products = products
        },
        error: (response) =>{
          console.log(response)
        },
      }
        
      )
  }
  deleteProduct(id:string){
    this.productService.deleteProduct(id)
    .subscribe({
      next:(response)=>
      {
        let currenturl = this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange:false})
        .then(() =>{
           this.router.navigate([currenturl]);
        })
      }
    })
  }
}
