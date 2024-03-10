import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {
constructor(private _AuthService:AuthService,
  private _FormBuilder:FormBuilder,
  private _Router:Router,
    private _ToastrService:ToastrService

    ){}
messegeErrors:String = '';
    verifyCode:FormGroup = this._FormBuilder.group({
      resetCode:['' , [Validators.required , Validators.pattern(/^\d{6}$/)]]
    })


    verifyCodeEmail():void{
      console.log(this.verifyCode.value.resetCode);
      this._AuthService.verificationCode(this.verifyCode.value.resetCode).subscribe({
        next:(response)=>{
          if (response.status == "Success") {
            console.log(response);
            this._Router.navigate(['/reset-password']);
            this._ToastrService.info('Success to insert New Password' , 'Fresh Cart')
          }



        },error:(err)=>{

          this.messegeErrors = err.error.message
        }
      })
    }
}
