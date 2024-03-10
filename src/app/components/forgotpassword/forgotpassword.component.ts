import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

constructor(private _FormBuilder:FormBuilder ,
  private _AuthService:AuthService,
  private _Router:Router
  ){}
messageError:string='';

  resetPassword:FormGroup = this._FormBuilder.group({
    email:['' ,[ Validators.required , Validators.pattern(/\w{3,10}@(gmail|yahoo|hotmail|outlook).com$/)]]
  })



  setEmailToResetPassword():void{
    console.log(this.resetPassword.value.email);

    this._AuthService.forgotPassword(this.resetPassword.value.email).subscribe({
      next:(response)=>{
        if (response.statusMsg == "success") {
          console.log(response);
          this._Router.navigate(['/verify-code'])
        }


      },error:(err)=>{
        this.messageError = err.error.message
        console.log(err);

      }
    })
  }
}
