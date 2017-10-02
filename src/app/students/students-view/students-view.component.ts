import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css']
})
export class StudentsViewComponent implements OnInit {

  id : number
  viewObj : any
  studentsService : StudentsService
  constructor(private route : ActivatedRoute,
    private router : Router,
    private injector : Injector) { 
    this.studentsService = new StudentsService(injector,"students");
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
        this.id = +params["id"];
        this.studentsService.getOne(this.id)
            .subscribe(data=>{
              debugger
                this.viewObj = data
            })
    })
  }


}
