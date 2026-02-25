import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http:HttpClient){}
  getProduct(){
    return this.http.get("https://6978a837cd4fe130e3d9b873.mockapi.io/products")
  }
  getsingleProducts(id:string){
  return this.http.get(`https://6978a837cd4fe130e3d9b873.mockapi.io/products/${id}`);
  
}
}