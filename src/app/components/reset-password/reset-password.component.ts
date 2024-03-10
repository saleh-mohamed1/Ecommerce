import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private _AuthService:AuthService ,
     private _Router:Router,
     private _FormBuilder:FormBuilder
     ){}

  resetPassword:FormGroup = this._FormBuilder.group({
    email:['' , [Validators.required , Validators.pattern(/\w{3,10}@(gmail|yahoo|hotmail|outlook).com$/)]],
    newPassword:['' , [Validators.required , Validators.pattern(/^\w{3,12}$/)]]
  })

  handleResetPassword():void{
  console.log(this.resetPassword.value);
  console.log(this.resetPassword.value.email);
  console.log(this.resetPassword.value.newPassword);


  this._AuthService.resetYourAccount(this.resetPassword.value.email ,this.resetPassword.value.newPassword ).subscribe({
    next:(response)=>{
      localStorage.setItem('unscrewToken',response.token);
      this._AuthService.unscrewTocenUserData();
      this._Router.navigate(['/home'])
      console.log(response.token);

      console.log(response);

    },error:(err)=>{
      console.log(err);

    }
  })
  }
}
