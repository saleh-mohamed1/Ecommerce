import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/BlankData/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService,
  private toastr: ToastrService ,
  private _Router:Router
  ){}
// setdetailsCart:Productdetails = {} as Productdetails ;
setdetailsCart:any = {};
numOfCartItems:any = {};
/* delete all items  */
clearYourCart():void{
  this.toastr.warning('Already Removed All Products ')
  this._CartService.removeAllCart().subscribe({
    next:(responseDeleteCart)=>{
      this.setdetailsCart = responseDeleteCart
      console.log(responseDeleteCart);
      // this._CartService.behaviorsNumbers.next(responseDeleteCart.numOfCartItems)
      this._CartService.behaviorsNumbers.next(0)

    },error:(err)=>{
      console.log(err.error);


    }
  })
}
/* just delete item */
deleteItem(id:string , tittle:string):void{
  this._CartService.removeProduct(id).subscribe({
    next:(response)=>{
      console.log(id);
      this.setdetailsCart = response
      this.toastr.warning(tittle , 'Already Removed')
      this._CartService.behaviorsNumbers.next(response.numOfCartItems)
      console.log(response);

    },error:(err)=>{

      console.log(err);

    }
  })
};
/* update Change Quantity */
changeQuantityOfProduct(id:string , Quantity:number):void{
  if (Quantity > 0) {
    this._CartService.updateChangeQuantity(id, Quantity).subscribe({
      next:(response)=>{
        this.setdetailsCart = response
        console.log(response);
      }
    })
  }else{
    alert('cant get initial 0')
  }
}


ngOnInit(): void {
    this._CartService.getCardProduct().subscribe({
      next:(response)=>{
        this.setdetailsCart = response
        console.log(response);

      },error:(err)=>{
        console.log(err);
        this._Router.navigate(['/home'])
        this.toastr.info('There are no Products to show. So the page will not be rendered' ,'Fresh Cart')
        this.numOfCartItems =err.error

      }
    })
}
}
