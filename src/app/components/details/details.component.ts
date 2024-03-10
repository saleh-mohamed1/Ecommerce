import { Productdetails } from './../../services/interface/productdetails';
import { WishlistService } from 'src/app/services/BlankData/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductDataService } from 'src/app/services/BlankData/product-data.service';
import { Products } from 'src/app/services/interface/products';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/BlankData/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute ,
  private _ToastrService:ToastrService,
  private _wishlistService:WishlistService,
  private _CartService:CartService,
  private _ProductDataService:ProductDataService){}
prodectDetails:Products = {} as Products;
imageDetails:any[] = [];
wishListData:any=[];
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
  nav: true
}
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parametars)=>{
        let setId:any = parametars.get('id')
        console.log(parametars);
        this._ProductDataService.getSpecificProducts(setId).subscribe({
          next:({data})=>{
            this.prodectDetails = data;
            this.imageDetails = data.images
            // console.log(this.imageDetails);

            console.log(data);

          }
        })
      }
    })
}

wishListDataAddOrRemove():void{
  if (this.wishListData.includes(this.prodectDetails.id)) {
    this._wishlistService.deleteItemListWish(this.prodectDetails.id).subscribe({
      next:(responseDelete)=>{
        console.log(responseDelete);
        this.wishListData = responseDelete.data
        this._ToastrService.error(responseDelete.message)
      }
    })
  }else{
    this._wishlistService.addProductToWishList(this.prodectDetails.id).subscribe({
      next:(responseAdd)=>{
        console.log(responseAdd);

        this.wishListData = responseAdd.data
        this._ToastrService.info(responseAdd.message)
      }
    })
  }

}


addToCart(id:string):void{
  console.log(id);
  this._CartService.getCart(id).subscribe({
    next:(response)=>{
      console.log(response);

    }
  })
}
}
