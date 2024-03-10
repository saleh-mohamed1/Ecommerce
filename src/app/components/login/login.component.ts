import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,
    private _ToastrService:ToastrService, private _Router:Router , private _FormBuilder:FormBuilder ){}
  messageError:string = '';
  spinner:boolean=false;
  // loginForm:FormGroup = new FormGroup({
  //   email:new FormControl('' , [Validators.required , Validators.pattern(/\w{3,10}@(gmail|yahoo|hotmail|outlook).com$/)]),
  //   password:new FormControl('' , [Validators.required , Validators.pattern(/^\w{3,12}$/)]),
  // })
  loginForm:FormGroup = this._FormBuilder.group({
    email:['' , [Validators.required , Validators.pattern(/\w{3,10}@(gmail|yahoo|hotmail|outlook).com$/)]],
    password:['' , [Validators.required , Validators.pattern(/^\w{3,12}$/)]],
  })
  formToSignIn():void{
    if ((this.loginForm.value.email&&this.loginForm.value.password) === '') {
      this._ToastrService.error('Inputs required')
    }else
    if (this.loginForm.valid) {

      console.log(this.loginForm.value);
      this.spinner=true;

      this._AuthService.signIn(this.loginForm.value).subscribe({
        next:(response)=>{
          if (response.message === 'success') {
            console.log(response);
            console.log(response.message);
            localStorage.setItem('unscrewToken',response.token);
            this._AuthService.unscrewTocenUserData();
          this._Router.navigate(['/home'])
          this.spinner=false;
          }
        },
        error:({error})=>{
          console.log(error);
          this.messageError = error.message
          this.spinner=false;
        }
      })
    }

  }


}
