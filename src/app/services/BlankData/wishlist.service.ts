import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private _HttpClient:HttpClient) { }
  /* array interfase for wishlist */
  headers:any = {token:localStorage.getItem('unscrewToken')}
  BaseUrl:string='https://ecommerce.routemisr.com'
  /*   headers:any ={ token: localStorage.getItem('unscrewToken')};*/

  /* Add Product To Wish List */
  addProductToWishList(idWishList:string):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/wishlist`,{
      productId:idWishList
    })
  }
  /* {
      headers:this.headers
    } */
  /* get Product that you Get it for your Wish List */

  getProductWishList():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/wishlist`)
  }

  /* delete Item From List Wish */
  deleteItemListWish(idProduct:string):Observable<any>{
    return this._HttpClient.delete(`${this.BaseUrl}/api/v1/wishlist/${idProduct}`)
  }
}
