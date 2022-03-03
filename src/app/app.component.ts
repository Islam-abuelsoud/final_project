import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalproject';
  constructor(private _AuthService:AuthService){
    if (_AuthService.userData.getValue( )!=null) {
      setTimeout(() => {_AuthService.logout()}, 5000);
    }

  }
}
