import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/BlankData/cart.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Orderdata } from 'src/app/services/interface/orderdata';


@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
constructor(private _CartService:CartService ,
  private _AuthService:AuthService){}
idAllOrders:Orderdata [] = [];
ngOnInit(): void {
this._AuthService.unscrewTocenUserData();
console.log(this._AuthService.dataString.id);

this._CartService.getAllOrders(this._AuthService.dataString.id).subscribe({
  next:(response)=>{
    console.log(response);
    this.idAllOrders = response

  }
})

}
;

}
