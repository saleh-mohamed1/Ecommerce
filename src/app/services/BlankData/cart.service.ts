import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private _HttpClient:HttpClient , private _AuthService:AuthService) { }
  behaviorsNumbers:BehaviorSubject<number> =new BehaviorSubject(0);
  headers:any ={ token: localStorage.getItem('unscrewToken')};
  getAuth():void{
    console.log(this._AuthService.dataString);
  }
  /* add cart using post */
  getCart(id:string):Observable<any>{

    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
      productId: id

    }
    )
  }

  /* get card using get */
  getCardProduct():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart')
  }
  /* remove product from cart */
  removeProduct(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
    )
  }
  /* delete all cart */
  removeAllCart():Observable<any>{
    return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart')
  }

  /* change Quantity */
  updateChangeQuantity(id:string , quantity:number ):Observable<any>
  {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      "count": quantity
    })
  }

  /* this api special for Payment */
  CeckOutPayment(idCart:string , detailsOrders:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${idCart}?url=http://localhost:4200`,
    {
      shippingAddress:detailsOrders
    })
  }

  /* this Api to Get all orders about them users */
  getAllOrders(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }





}




/*
export class CartService {
  constructor(private _HttpClient:HttpClient , private _AuthService:AuthService) { }
  headers:any ={ token: localStorage.getItem('unscrewToken')};
  getAuth():void{
    console.log(this._AuthService.dataString);
  }
  getCart(id:string):Observable<any>{

    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
      productId: id

    },
    {
      headers:this.headers
    }
    )
  }

  getCardProduct():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers:this.headers
    })
  }
  removeProduct(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      headers:this.headers
    }
    )
  }
  removeAllCart():Observable<any>{
    return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers:this.headers
    })
  }

  updateChangeQuantity(id:string , quantity:number ):Observable<any>
  {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      "count": quantity
    },
    {
      headers:this.headers
    })
  }

  CeckOutPayment(idCart:string , detailsOrders:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${idCart}?url=http://localhost:4200`,
    {
      shippingAddress:detailsOrders
    },
    {
      headers:this.headers
    })
  }

  getAllOrders(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }
}
*/
