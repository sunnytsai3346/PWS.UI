import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseAPIUrl ="https://localhost:7291";
  constructor(private http: HttpClient) { }

  GetAllProducts() : Observable<Product[]> {
    return  this.http.get<Product[]>(this.baseAPIUrl + '/api/Products');
  }
  addProduct(newProduct:Product) :Observable<Product>{
    newProduct.id ='00000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseAPIUrl + '/api/Products',newProduct);
  }

  GetProduct(id:string) :Observable<Product>{
    return this.http.get<Product>(this.baseAPIUrl + '/api/Products/'+id );
   
  }

  updateProduct(id:string, product :Product):Observable<Product> {
    console.log(product.name + ',' + product.price);
    return this.http.put<Product>(this.baseAPIUrl + '/api/Products/'+id ,product);

  }
  deleteProduct(id:string) : Observable<Product>{
    return this.http.delete<Product>(this.baseAPIUrl+ '/api/Products/'+id );
  }
}
