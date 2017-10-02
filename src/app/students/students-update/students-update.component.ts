import { Component, OnInit,Injector } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-students-update',
  templateUrl: '../students-form.html',
  styleUrls: ['./students-update.component.css']
})
export class StudentsUpdateComponent implements OnInit {

  id : number
  pageForm : FormGroup
  studentsService : StudentsService
  constructor(private route : ActivatedRoute,
    fb:FormBuilder,
    private router : Router,
    private injector : Injector
    ) { 
    
    this.studentsService = new StudentsService(injector,"students");

    this.pageForm = fb.group({
      full_name: new FormControl('', [Validators.required]),
      phone_number : new FormControl(''),
      engrip_user_id : new FormControl(''),
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
        this.id = +params["id"];
        this.studentsService.getOne(this.id)
            .subscribe(data=>{
              this.pageForm.patchValue(data)
            })
    })
  }

  submit(){
      this.studentsService.update(this.id,this.pageForm.value)
        .subscribe(data=>{
            this.router.navigate(["/students"])
        })
  }

}
