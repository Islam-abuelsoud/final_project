import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


jwtDecode
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if (localStorage.getItem('decodeData') !=null) {
      this.setUserData()
    }
   }

  userData = new BehaviorSubject(null) ;

  setUserData(){
    let encode = JSON.stringify(localStorage.getItem('decodeData'))
    let decode:any = jwtDecode(encode)
    this.userData.next(decode) ;
  }
  register(userInfo: object):Observable <any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',userInfo)
  }
  login(userInfo: object):Observable <any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',userInfo)
  }
  logout()
  {
    localStorage.removeItem('decodeData')
    this._Router.navigate(['/login']);
    this.userData.next(null);
  }
}
