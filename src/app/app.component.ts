import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private localStorageService:LocalStorageService,
              private userService:UserService){
  }

  logout(){
    this.userService.logout()
    location.reload();
  }
}
