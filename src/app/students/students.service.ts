import { Injector } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs/Rx'; 
import { CrudManager } from '../shared/crudManager';  

export class StudentsService extends CrudManager {


  constructor(injector : Injector,
          sModule:string) {
    super(injector,sModule);
  }

  

}
