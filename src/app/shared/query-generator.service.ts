import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable()
export class QueryGeneratorService {

  queriesObject : any = {}
  constructor() { }

  getQueryString(queryObject){
    let queryString = "";
    _.forEach(queryObject,function(value,key){
      if(value){
        queryString = key+" like "+value+","
      }
    }) 
    return queryString;
  }

  cacheQueryObj(cacheKey,QueryObj){
    this.queriesObject.cacheKey = QueryObj
  }
  getCachedQueryObj(cacheKey){
    return this.queriesObject.cacheKey
  }

}
