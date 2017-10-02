import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Rx'; 
import { UserService } from '../shared/user.service'; 


export class StudentPro {

  constructor(private http : HttpClient){

  }
  public getStudents() : Observable<any> {
    return this.http.get<any>("students")
  }

}
