import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/BlankData/cart.service';
import { ProductDataService } from 'src/app/services/BlankData/product-data.service';
import { Products } from 'src/app/services/interface/products';
import { ToastrService } from 'ngx-toastr'; //toster module
import { WishlistService } from 'src/app/services/BlankData/wishlist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private _ProductDataService:ProductDataService ,
  private _CartService:CartService,
  private toastr: ToastrService,
  private _WishlistService:WishlistService
  ){}
productsData:Products[] = [];
wishListData:any = [];
addToCart:any = [];
serchInputValue:string='';

/* add to cart */
addCart(id:string):void{
  this._CartService.getCart(id).subscribe({
    next:(response)=>{
      console.log(response);
      this.toastr.success(response.message , 'Fresh Cart')
      this._CartService.behaviorsNumbers.next(response.numOfCartItems)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
category:any[] = [];
sliderOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  items:1 ,
  nav: true
};
categoriesOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['perv', 'next'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
ngOnInit(): void {
    this._ProductDataService.getProducts().subscribe({
      next:({data})=>{
        console.log(data);
        this.productsData = data
      }
    });

    this._ProductDataService.categoriesMain().subscribe({
      next:(response)=>{
        this.category =response.data;
        console.log(response.data);

      }
    })
}


isChicked:boolean= false;
colorIcon(id:string):void{
  if (this.wishListData.includes(id)) {
    this._WishlistService.deleteItemListWish(id).subscribe({
      next:(response)=>{
        console.log(id);
        this.wishListData = response.data
        console.log(response);
        this.toastr.error(response.message , 'Fresh Cart' )
      }
    })
  }else{
   this._WishlistService.addProductToWishList(id).subscribe({
      next:(response)=>{
        console.log(id);
        this.wishListData = response.data
        console.log(response);
        this.toastr.info(response.message , 'Fresh Cart')
      }
    })
  }

}


}
