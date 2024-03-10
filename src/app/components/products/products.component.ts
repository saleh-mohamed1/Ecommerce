import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/BlankData/cart.service';
import { ProductDataService } from 'src/app/services/BlankData/product-data.service';
import { WishlistService } from 'src/app/services/BlankData/wishlist.service';
import { Products } from 'src/app/services/interface/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
constructor(private _ProductDataService:ProductDataService,
  private _CartService:CartService,
  private _WishlistService:WishlistService,
  private toastr: ToastrService){}
  productsData:Products[] = [];
  category:any[] = [];
  wishListData:any = [];
serchInputValue:string='';
addCart(id:string):void{
  this._CartService.getCart(id).subscribe({
    next:(response)=>{
      console.log(response);
      this.toastr.success(response.message , 'Fresh Cart')

    },
    error:(err)=>{
      console.log(err)
    }
  })
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
colorIcon(id:any):void{

  if (this.wishListData.includes(id)) {
    this._WishlistService.deleteItemListWish(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.toastr.error(response.message)
        this.wishListData= response.data

      }
    })
  }else{
 this._WishlistService.addProductToWishList(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.toastr.info(response.message)
        this.wishListData = response.data

      }
    })
  }


}
}
