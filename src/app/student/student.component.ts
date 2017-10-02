import { Component, OnInit } from '@angular/core';
import { StudentPro } from './student.pro';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students;
  studentPro : StudentPro
  constructor(private http:HttpClient) { 
    this.studentPro = new StudentPro(http);
  }

  ngOnInit() {
    this.studentPro.getStudents().subscribe(data=>{
      this.students = data
    },error=>{
    })
  }

}
