import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  error:string ='';


  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    last_name:new FormControl(null , [Validators.required ,Validators.minLength(3) , Validators.maxLength(12)]),
    age:new FormControl(null , [Validators.required ,Validators.min(16) , Validators.max(80)]),
    email:new FormControl(null , [Validators.required ,Validators.email]),
    password:new FormControl(null ,[Validators.pattern(/[a-z]/)]),
  })


  submitRegister(info:FormGroup){
    this._AuthService.register(info.value).subscribe((response)=>{
      if (response.message == 'success') {
        this._Router.navigate(['/login'])
        console.log(info)
      }
      else{
        this.error = 'error ya ba4a';
      }
    });
  }

  ngOnInit(): void {
  }


}
