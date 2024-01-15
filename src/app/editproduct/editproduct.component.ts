import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent implements OnInit {
[x: string]: any;
  updatedProduct : Product = {
    id: '',
    name: '',
    type: '',
    color: '',
    price: 0
  }    
  
  constructor(private productService :ProductsService, 
    private router:Router,
    private route:ActivatedRoute){


  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');
        if (id){
          this.productService.GetProduct(id)
          .subscribe({
            next:(res)=>{
              this.updatedProduct = res;

            }
          })
        }
      }

    });
        
  }
  updateProduct(){
    this.productService.updateProduct(this.updatedProduct.id,this.updatedProduct)
    .subscribe({
      next: (response)=>{
        console.log(response);
        this.router.navigate(['product']);
      },
      error:(error) =>{
        console.log(error);
      }
    })

  
  

}
}
