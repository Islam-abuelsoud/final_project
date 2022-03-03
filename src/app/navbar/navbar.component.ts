import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }
  islogin:boolean =false;
  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if (this._AuthService.userData.getValue() !=null) {
        this.islogin = true;
      } else {
        this.islogin =false;
      }
    })
  }
  collLogout(){
    this._AuthService.logout();
  }

}
