import { Component, OnInit,Injector } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QueryGeneratorService } from '../../shared/query-generator.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {


  pageForm : FormGroup
  studentsService : StudentsService
  students;
  pageOptions : any
  constructor(fb:FormBuilder,
              private injector : Injector,
              private queryGeneratorService : QueryGeneratorService) { 

    this.pageForm = fb.group({
      id: new FormControl(''),
      full_name: new FormControl(''),
      collage_name: new FormControl(''),
      engrip_user_id: new FormControl(''),
      roll_number: new FormControl(''),
      phone_number: new FormControl(''),
      branch_id: new FormControl(''),
      year_of_graduation: new FormControl('')
    })
    this.studentsService = new StudentsService(injector,"students");
    

  }

  ngOnInit() {

    this.search();
  }

  page = 1;
  search(){
    let queryString = this.queryGeneratorService.getQueryString(this.pageForm.value)

    this.studentsService.getAll(queryString,this.page).subscribe(resp=>{
      this.students = resp.data
      this.pageOptions = resp.pageOptions;
    },error=>{
    })
  }

  pageChange(page){
    this.page= page;
    this.search()
  }

  submit(){
    this.page = 1;
    this.search()
  }

  createStudent(){
    location.href = "students/create"
  }


}
