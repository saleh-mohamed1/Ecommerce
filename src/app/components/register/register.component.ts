import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
constructor(private _AuthService:AuthService , private _Router:Router){}
spinner:boolean=false;
messageError:string = '';
  registerForm:FormGroup = new FormGroup({
    name:new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email:new FormControl('' , [Validators.required , Validators.pattern(/\w{3,10}@(gmail|yahoo|hotmail|outlook).com$/)]),
    password:new FormControl('' , [Validators.required , Validators.pattern(/^\w{3,12}$/)]),
    // rePassword:new FormControl('' ,[Validators.required , Validators.pattern(/^\w{3,12}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('' , [Validators.required , Validators.pattern(/^01[0125]\d{8}$/)]),
  }

  ,{validators:[this.confirmPassword]} as FormControlOptions);


  confirmPassword(FormGroups:FormGroup):void{
    if (FormGroups.get('rePassword')?.value == '') {
      FormGroups.get('rePassword')?.setErrors({required:true})
    }
    else
    if (FormGroups.get('password')?.value != FormGroups.get('rePassword')?.value ) {
      FormGroups.get('rePassword')?.setErrors({CanNotMatch:true})
    }
  }


registerData():void{
  if (this.registerForm.valid == true) {
    this.spinner = true;
    console.log(this.registerForm.value);
    this._AuthService.signUp(this.registerForm.value).subscribe({
      next:(res)=>{
        console.log(res.message);
        if (res.message == "success") {
          this._Router.navigate(['/login']);
          this.spinner = false;
        }

      },
      error:(err)=>{
        this.spinner = false;
        this.messageError = err.error.message;
        console.log(err.message);

      }
    })
  }

}


}
