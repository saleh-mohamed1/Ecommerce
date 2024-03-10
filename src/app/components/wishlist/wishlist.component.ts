import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/BlankData/cart.service';
import { WishlistService } from 'src/app/services/BlankData/wishlist.service';
import { Wishlist } from 'src/app/services/interface/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
constructor(private _WishlistService:WishlistService,
            private _ToastrService:ToastrService,
            private _CartService:CartService,
            private _Router:Router
            ){}
wishListArrayForProducts:Wishlist[] = [];
wishListEmpty:boolean=false;
wishListFull:boolean=false;
removeItemFromWishList(idProduct:string):void{
  this._WishlistService.deleteItemListWish(idProduct).subscribe({
    next:(dataRemoved)=>{
      console.log(dataRemoved);
      console.log(idProduct);
      this._WishlistService.getProductWishList().subscribe({
        next:(response)=>{
          this.wishListArrayForProducts = response.data
          if (response.count > 0 ) {
            this.wishListFull = true
            this.wishListEmpty = false
          }if(response.count <= 0){
            this.wishListEmpty = true
            this.wishListFull = false
          }
        }
      })
      this._ToastrService.error(dataRemoved.message)
    }
  })
}

ngOnInit(): void {
  this._WishlistService.getProductWishList().subscribe({
    next:(response)=>{
      console.log(response);
      this.wishListArrayForProducts = response.data
      if (response.count > 0 ) {
        this.wishListFull = true
        this.wishListEmpty = false
      }if(response.count <= 0){
        this.wishListEmpty = true
        this.wishListFull = false
      }

    }
  })
}

addFromWishToCart(id:string){
  console.log(id);
  this._CartService.getCart(id).subscribe({
    next:(response)=>{
      this._ToastrService.info(`you Already add this Product to your cart ` , 'Fresh Cart')
      console.log(response);

    }
  })
}

backToHome():void{
this._Router.navigate(['/home'])
}
}
