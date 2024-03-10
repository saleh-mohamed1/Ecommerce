import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient){}

  dataString:any = {};
  unscrewTocenUserData(){
    if (localStorage.getItem('unscrewToken')) {
      let userDataToken:any = localStorage.getItem('unscrewToken');
      let userDataTokenScrew = jwtDecode(userDataToken);
      this.dataString = userDataTokenScrew;
      console.log(userDataTokenScrew);
    }
  }

 /*  datastringNewToken:any = {}
  unscrewTocenUserDataReset(){
    if (localStorage.getItem('resetUnScrewToken')) {
      let userSetToken:any = localStorage.getItem('resetUnScrewToken')
      let userDataUnscrewToken = jwtDecode(userSetToken)
      this.datastringNewToken = userDataUnscrewToken
      console.log(this.datastringNewToken);


    }
  } */

  signUp(registerForm:object):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',registerForm)
  }
  signIn(loginForm:object):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',loginForm)
  }


  /* forgot password */
  forgotPassword(emailReset:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',{
      email:emailReset
    })
  }

  /* verification code */
  verificationCode(resetCodeVerification:number ):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',{
      resetCode:resetCodeVerification
    })
  }

  /* reset your account password */
  resetYourAccount(getEmail:string ,getPassword:string ):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', {
      email:getEmail,
      newPassword:getPassword
    })
  }
}
