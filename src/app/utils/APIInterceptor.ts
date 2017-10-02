import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(private userService:UserService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cHeaders = new HttpHeaders().append("x-token",this.userService.getToken())
    const apiReq = req.clone({ url: `http://localhost:3000/${req.url}`,
            headers:cHeaders});
    
    return next.handle(apiReq);
  }
}