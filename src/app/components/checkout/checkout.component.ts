import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/BlankData/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute ,
  private _CartService:CartService ,
  private _FormBuilder:FormBuilder
  ){}
idCart:any = ''
/* form control for Payment */
ChecOutValues:FormGroup= this._FormBuilder.group({
  details:['', Validators.required],
  phone:['' , [Validators.required , Validators.pattern(/^01[0125]\d{8}$/)]],
  city:['',Validators.required]
})
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params.get('idCart'));
        this.idCart = params.get('idCart')
      }
    })

}


checkOutPaymenCart():void{
  console.log(this.ChecOutValues.value);
  console.log(this.ChecOutValues);

  this._CartService.CeckOutPayment(this.idCart , this.ChecOutValues.value).subscribe({
    next:(response)=>{
      console.log(response);
      window.open(response.session.url , '_self')

    }
  })

}
}
