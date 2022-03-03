import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  error:string ='';



  loginForm: FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required ,Validators.email]),
    password:new FormControl(null ,[Validators.pattern(/[a-z]/)]),
  })



  submitlogin(info:FormGroup){
    this._AuthService.login(info.value).subscribe((response)=>{
      if (response.message == 'success') {
        localStorage.setItem('decodeData',response.token);
        this._AuthService.setUserData();
        this._Router.navigate(['/home']);
      }
      else{
        this.error = 'error ya ba4a';
      }
    });
    console.log(info);

  }

  ngOnInit(): void {

  }

}
