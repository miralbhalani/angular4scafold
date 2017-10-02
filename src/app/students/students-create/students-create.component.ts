import { Component, OnInit, Injector } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {patternValidator} from "../../shared/pattern-validator";
import {StudentsService} from "../students.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-create',
  templateUrl: '../students-form.html',
  styleUrls: ['./students-create.component.css']
})
export class StudentsCreateComponent implements OnInit {

  pageForm : FormGroup
  errorMessage : String
  studentsService : StudentsService

  constructor(fb:FormBuilder,
              private router: Router,
              private injector:Injector) { 

    this.studentsService = new StudentsService(injector,"students");
    this.pageForm = fb.group({
      full_name: new FormControl('', [Validators.required]),
      phone_number : new FormControl(''),
      engrip_user_id : new FormControl(''),
    })

  }

  ngOnInit() {
  }

  submit(){
      this.studentsService.create(this.pageForm.value)
        .subscribe(data=>{
            this.router.navigate(["/students"])
        })
  }

}
