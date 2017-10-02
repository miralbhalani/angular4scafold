import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class UserService {

  isLoggedIn : boolean
  constructor(private localStorageService:LocalStorageService){
      this.isLoggedIn = !!localStorageService.get("user_info");
  }

  logout(){
    this.localStorageService.remove("user_info")
    location.reload();
  }

  getUserName(){
    let userInfo = <any> this.localStorageService.get("user_info");
    return userInfo.loginInfo.full_name
  }

  getToken(){
    let userInfo = <any> this.localStorageService.get("user_info");
    if(userInfo){
      return userInfo.token
    }
    return false
  }

}
