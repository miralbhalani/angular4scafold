import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../shared/user.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(private userService:UserService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
    let mReq = { url: `http://localhost:3000/${req.url}`,
            headers:new HttpHeaders()}

    
    let token = this.userService.getToken();
    if(token){
      const cHeaders = new HttpHeaders().append("x-token",this.userService.getToken())
      mReq.headers = cHeaders
    }
    

    const apiReq = req.clone(mReq);
    
    return next.handle(apiReq);
  }
}