import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { UserService } from './user.service';

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
    location.reload();
  }
}
