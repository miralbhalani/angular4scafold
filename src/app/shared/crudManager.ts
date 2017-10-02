import { Injector } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

export class CrudManager {

  http : HttpClient
  sModule : string
  router : ActivatedRoute
  constructor(injector : Injector,sModule:string) {
    this.http = injector.get(HttpClient);
    this.router = injector.get(ActivatedRoute);
    this.sModule = sModule
  }

  public getAll(quetyString : string = "",page:number = 0) : Observable<any> {

    let subject = new Subject();

    // this.router.queryParams.subscribe(params=>{

      let httpParams = new HttpParams();
      if(page){
        httpParams = httpParams.set("page",""+page);
      }
      if(quetyString!=""){
        httpParams = httpParams.set("filter",quetyString);
      }

      this.http.get<any>(this.sModule,{
        params:httpParams,
        observe: 'response'
      }).subscribe(resp=>{
        console.log(resp.headers.get("x-page-options"))

        let pageOptions = {
          count : resp.headers.get("x-page-options-count"),
          page : resp.headers.get("x-page-options-page"),
          pagesize : resp.headers.get("x-page-options-pagesize")
        }

        subject.next({
          pageOptions:pageOptions,
          data : resp.body
        });
        
      })
    // })

    return subject.asObservable()
  }

  public create(object) : Observable<any> {
    return this.http.post<any>(this.sModule,object)
  }

  public update(id,object) : Observable<any> {
    return this.http.patch<any>(`${this.sModule}/${id}`,object)
  }

  public getOne(id) : Observable<any> {
    return this.http.get<any>(`${this.sModule}/${id}`)
  }

}
