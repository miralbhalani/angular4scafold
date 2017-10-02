import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {patternValidator} from "../shared/pattern-validator";
import { LocalStorageService } from 'angular-2-local-storage';
import { UserService } from '../shared/user.service';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  errorMessage : String

  constructor(fb:FormBuilder,
              private http :HttpClient,
              private localStorageService:LocalStorageService,
              private userService : UserService) { 

    this.loginForm = fb.group({
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    })

  }

  onSubmit(){
    this.http.post<any>("login",
                {
                  "email":this.loginForm.value.email,
                  "password":this.loginForm.value.password
                })
      .subscribe(data=>{
        // this.cookieService.set("user_info",data.token);
        this.localStorageService.set("user_info",data)
        location.reload();
      },error=>{
        console.log(error)

        if(error.error){
          let errorData = JSON.parse(error.error)
          this.errorMessage = errorData.message
        }
        
      })

    console.log(this.loginForm)
  }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(form=>{
        this.errorMessage = ""
    })
  }


}
